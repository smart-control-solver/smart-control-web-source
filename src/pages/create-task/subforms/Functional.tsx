import React from 'react';
import { connect } from 'react-redux';
import {
    TextField, FormControl, FormControlLabel, Checkbox, FormHelperText, Paper,
    Typography, makeStyles, Table, TableHead, TableRow, TableCell, TableBody, Button,
    IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { IState, IFunctional, IValidation } from '../../../store/state';

const useStyles = makeStyles(theme => ({
    block: {
      marginTop: theme.spacing(4),
    },
  }));


type FunctionalComponent = React.FC<{
    functional: IFunctional;
    validity: IValidation['functionalStep'];
    updateFunctional: (payload: IFunctional) => void;
    updateConstant: (constantIndex: number, prop: 'key' | 'value') => (payload: any) => void;
    addConstant: () => void;
    removeConstant: (payload: number) => () => void;
}>;
const Functional: FunctionalComponent = ({functional, validity, updateFunctional, updateConstant, addConstant, removeConstant}) => {
        const classes = useStyles();
        const handleChange = (key: keyof IFunctional) => (payload: any) => {
            updateFunctional({
                ...functional,
                [key]: payload.target.value
            });
        };

        return (
            <Paper className="column Paper">
                <TextField
                    label="Целевая функция"
                    error={!validity.valid && validity.passed && !functional.functional}
                    onChange={handleChange('functional')}
                    value={functional.functional}
                />
                {!validity.valid && validity.passed && !functional.functional && (
                    <FormHelperText error={true}>Целевая функция должна быть указана</FormHelperText>
                )}
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox value={functional.hasIntegralPart} onChange={handleChange('hasIntegralPart')}/>
                        }
                        label="Есть интегральная часть"
                    />
                </FormControl>
                <div className={classes.block + ' row'}>
                    <TextField
                        label="Начальный момент времени"
                        onChange={handleChange('t0')}
                        type="number"
                        value={functional.t0}
                    />
                    <TextField
                        label="Конечный момент времени"
                        onChange={handleChange('T')}
                        type="number"
                        value={functional.T}
                    />
                </div>
                <Typography variant="h6" className={classes.block}>
                    Константы
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Имя</TableCell>
                            <TableCell>Значение</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {functional.constants.map((constant, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row" className="row">
                                    <TextField
                                        onChange={updateConstant(i, 'key')}
                                        label={`Имя константы${i}`}
                                        error={!validity.valid && validity.passed && !constant.key}
                                        value={constant.key}/>
                                    {!validity.valid && validity.passed && !constant.key && (
                                        <FormHelperText error={true}>{`Укажите имя константы`}</FormHelperText>
                                    )}
                                </TableCell>
                                <TableCell className="column">
                                    <TextField
                                        onChange={updateConstant(i, 'value')}
                                        label={`Значение константы${i}`}
                                        error={!validity.valid && validity.passed && !constant.value}
                                        type="number"
                                        value={constant.value}/>
                                    {!validity.valid && validity.passed && !constant.value && (
                                        <FormHelperText error={true}>{`Укажите значение константы`}</FormHelperText>
                                    )}
                                </TableCell>
                                <TableCell className="column">
                                    <IconButton onClick={removeConstant(i)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button onClick={addConstant}>
                    Добавить константу
                </Button>
            </Paper>
        );
    }



export default connect(
    (state: IState) => ({
        functional: state.editingTask.functionalStep,
        validity: state.editingTask.validation.functionalStep
    }),
    dispatch => ({
        updateFunctional: (payload: IFunctional) => dispatch({ type: 'FUNCTIONAL_UPDATE', payload }),
        updateConstant: (constantIndex: number, prop: 'key' | 'value') => (payload: any) => dispatch({ type: 'CONSTANT_UPDATE', payload: {
            constantIndex,
            prop,
            value: payload.target.value
        } }),
        addConstant: () => dispatch({ type: 'CONSTANT_ADD' }),
        removeConstant: (payload: number) => () => dispatch({ type: 'CONSTANT_REMOVE', payload })
    })
)(Functional);