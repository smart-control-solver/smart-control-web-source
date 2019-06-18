import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { StepButton, StepLabel } from '@material-ui/core';
import { connect } from 'react-redux';

import Functional from './subforms/Functional';
import Variables from './subforms/Variables';
import Management from './subforms/Management';
import Derivatives from './subforms/Derivatives';
import Method from './subforms/Method';
import { IState, IValidation, TaskStep } from '../../store/state';
import { IValidityUpdate } from '../../store/task-reducer';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    maxWidth: '720px'
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
        {
            label: 'Целевая функция',
            content: <Functional/>
        },
        {
            label: 'Фазовые и сопряженные переменные',
            content: <Variables/>
        },
        {
            label: 'Структура управления',
            content: <Management/>
        },
        {
            label: 'Производные',
            content: <Derivatives/>
        },
        {
            label: 'Конфигурация метода',
            content: <Method/>
        }
    ];
}

type CreateTaskType = React.FC<{
    validity: IValidation;
    updateValidity: (payload: IValidityUpdate) => void;
    reset: () => void;
    start: () => void;
}>;
const CreateTask: CreateTaskType = ({validity, updateValidity, reset, start}) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(3);
    const steps = getSteps();

    // Перемещение по шагам
    const handleStep = (step: number) => () => {
        if (step !== activeStep) {
            const validityStep = validity[TaskStep[activeStep] as keyof IValidation];
            updateValidity({
                key: TaskStep[activeStep],
                value: {
                    ...validityStep,
                    passed: true
                }
            })
            setActiveStep(step);
        }
    };
    // Сброс формы
    const handleReset = () => {
        setActiveStep(0);
        reset();
    };
    const handleRun = () => {
        setActiveStep(0);
        if (validity.functionalStep && validity.variableStep && validity.managementStep &&
            validity.derivativeStep && validity.methodStep
        ) {
            start();
        }
    };
    const handleImport = () => {};
    const handleExport = () => {};

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.resetContainer}>
            <Typography><span>Пожалуйста, заполните условия задачи или импортируйте из csv.</span></Typography>
            <Button onClick={handleImport} className={classes.button} disabled={true}>
                Импорт из csv
            </Button>
            <Button onClick={handleExport} className={classes.button} disabled={true}>
                Экспорт в csv
            </Button>
            <Button onClick={handleReset} className={classes.button}>
                Сбросить
            </Button>
            <Button onClick={handleRun} className={classes.button}>
                Запустить решение
            </Button>
        </Paper>
        <Stepper nonLinear activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => {
              const validityStep = validity[TaskStep[index] as keyof IValidation];
              return (
            <Step key={step.label} >
                <StepButton onClick={handleStep(index)} disableRipple>
                    <StepLabel error={!validityStep.valid && validityStep.passed}>{step.label}</StepLabel>
                </StepButton>
                <StepContent>
                    {step.content}
                    <div className={classes.actionsContainer}>
                        {/* <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleStep(index - 1)}
                                className={classes.button}
                            >
                                Перейти к предыдущему шагу
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleStep(index + 1)}
                                className={classes.button}
                                >
                                {activeStep === steps.length - 1 ? 'Завершить' : 'Перейти к следующему шагу'}
                            </Button>
                        </div> */}
                    </div>
                </StepContent>
            </Step>
          )})}
        </Stepper>
        {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
                <Typography><span>Все данные введены.</span></Typography>
            </Paper>
        )}
      </div>
    );
}

export default connect(
    (state: IState) => ({
        validity: state.editingTask.validation,
    }),
    dispatch => ({
        updateValidity: (payload: IValidityUpdate) => dispatch({ type: 'VALIDITY_UPDATE', payload }),
        reset: () => dispatch({ type: 'RESET' }),
        start: () => dispatch({ type: 'WASM_START' }),
    })
)(CreateTask);