import React from 'react';
import { connect } from 'react-redux';
import { Paper, TextField, FormHelperText, Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { IState, IValidation, IVariable, IVariableStep } from '../../../store/state';

type VariablesComponent = React.FC<{
    variables: IVariableStep;
    validity: IValidation['variableStep'];
    addVariable: () => void;
    updateVariable: (payload: {var: IVariable; index: number}) => void;
    removeVariable: (payload: number) => () => void;
}>;
const Variables: VariablesComponent = ({variables, validity, addVariable, updateVariable, removeVariable}) => {
    const handleVarChange = (key: keyof IVariable, i: number) => (payload: any) => updateVariable({
        var: {
            ...variables.vars[i],
            [key]: payload.target.value
        },
        index: i
    });
    return (
        <div className="column">
            {variables.vars.map((variable, i) => (
                <Paper className="column Paper" key={i}>
                    <TextField
                        label={'Функция фазовой переменной ' + i}
                        error={!validity.valid && validity.passed && !variable.f}
                        onChange={handleVarChange('f', i)}
                        value={variable.f}
                    />
                    {!validity.valid && validity.passed && !variable.f && (
                        <FormHelperText error={true}>{'Укажите функцию dx' + i + '/dt'}</FormHelperText>
                    )}
                    <TextField
                        label={'Функция сопряженной переменной ' + i}
                        error={!validity.valid && validity.passed && !variable.p}
                        onChange={handleVarChange('p', i)}
                        value={variable.p}
                    />
                    {!validity.valid && validity.passed && !variable.p && (
                        <FormHelperText error={true}>{'Укажите функцию p' + i}</FormHelperText>
                    )}
                    <div className="row">
                        <TextField
                            label="x(t0)"
                            onChange={handleVarChange('xt0', i)}
                            type="number"
                            value={variable.xt0}
                            helperText={'Начальной значение фазовой переменной ' + i}
                        />
                        <TextField
                            label="p(T)"
                            onChange={handleVarChange('pT', i)}
                            type="number"
                            value={variable.pT}
                            helperText={'Конечное значение сопряженной переменной ' + i}
                        />
                    </div>
                    <IconButton className="close-btn" onClick={removeVariable(i)} disabled={variables.vars.length === 1}>
                        <DeleteIcon />
                    </IconButton>
                </Paper>
            ))}
            <Button onClick={addVariable}>
                Добавить переменную
            </Button>
        </div>

    );
}

export default connect(
    (state: IState) => ({
        variables: state.editingTask.variableStep,
        validity: state.editingTask.validation.variableStep
    }),
    dispatch => ({
        addVariable: () => dispatch({ type: 'VARIABLE_ADD' }),
        updateVariable: (payload: {var: IVariable; index: number}) => dispatch({ type: 'VARIABLE_UPDATE', payload }),
        removeVariable: (payload: number) => () => dispatch({ type: 'VARIABLE_REMOVE', payload }),
    })
)(Variables);