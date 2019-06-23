import { IManager, IState, IValidation } from '../../../store/state';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Paper, IconButton, Table, TableHead, TableRow, TableCell, TableBody, TextField, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    tableHeader: {
        maxWidth: '200px',
        minWidth: '120px'
    },
    tkField: {
        maxWidth: '80px',
        marginLeft: '8px'
    },
    center: {
        alignSelf: 'center'
    }
  }));

type ManagementType = React.FC<{
    management: IManager[];
    validity: IValidation['managementStep'];

    addManager: () => void;
    updateManager: (key: keyof IManager, i: number) => (payload: any) => void;
    removeManager: (payload: number) => () => void;
    updateDudv: (i: number, j: number) => (payload: any) => void;
    updateV: (i: number, j: number, k: number) => (payload: any) => void;
    updateTk: (i: number, k: number) => (payload: any) => void;

    addParameter: (i: number) => () => void;
    removeParameter: (i: number, j: number) => () => void;
    addTimeSwitcher: (payload: number) => () => void;
    removeTimeSwitcher: (i: number, j: number) => () => void;
}>;
const Management: ManagementType = ({
    management, validity,
    addManager, updateManager, removeManager, updateDudv, updateV, updateTk,
    addParameter, removeParameter,
    addTimeSwitcher, removeTimeSwitcher
}) => {
    const classes = useStyles();
    return (
        <div className="column">
            {management.map((manager, i) => (
                <Paper className="column Paper" key={i}>
                    <TextField
                        label={'Функция управления ' + i}
                        error={!validity.valid && validity.passed && !manager.u}
                        onChange={updateManager('u', i)}
                        value={manager.u}
                        helperText={!validity.valid && validity.passed && !manager.u && `Укажите функцию u ${i}`}
                    />
                    <div className="table-scroll-x">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    {manager.dudv.map((v, j) => (
                                        <TableCell key={j}>
                                            <div className={classes.tableHeader}>
                                                <span>V{j}</span>
                                                <IconButton
                                                    onClick={removeParameter(i, j)}
                                                    disabled={manager.dudv.length === 1}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </div>
                                        </TableCell>
                                    )) }
                                    <TableCell />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        du/dv
                                    </TableCell>
                                    {manager.dudv.map((v, s) => (
                                        <TableCell key={s}>
                                            <TextField
                                                onChange={updateDudv(i, s)}
                                                label={`du${i}/dv${s}`}
                                                error={!validity.valid && validity.passed && !manager.dudv[s]}
                                                helperText={!validity.valid && validity.passed && !manager.dudv[s] && `Укажите производную du${i}/dv${s}`}
                                                value={v}/>
                                        </TableCell>
                                    )) }
                                    <TableCell />
                                </TableRow>
                                {manager.v.map((row, k) => (
                                    <TableRow key={k}>
                                        <TableCell component="th" scope="row" className="row">
                                            <span>
                                                t{k} - {k === manager.v.length - 1 ? 'T' : 't' + (k + 1)}
                                            </span>
                                        </TableCell>
                                        {row.map((v, s) => (
                                            <TableCell key={s}>
                                                <TextField
                                                    type="number"
                                                    label={`Значение v${s}`}
                                                    helperText={`на интервале t${k} - ${k === manager.v.length - 1 ? 'T' : 't' + (k + 1)}`}
                                                    onChange={updateV(i, k, s)}
                                                    value={v}/>
                                            </TableCell>
                                        )) }
                                        <TableCell>
                                            <IconButton onClick={removeTimeSwitcher(i, k)} disabled={manager.v.length === 1}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    {!!(manager.tk.length) && (
                        <div className="table-scroll-x">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell>
                                            Момент переключения
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {manager.tk.map((t, k) => (
                                        <TableRow key={k}>
                                            <TableCell component="th" scope="row" className="row">
                                                <span>
                                                    {'t' + (k + 1)}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <TextField
                                                    type="number"
                                                    className={classes.tkField}
                                                    onChange={updateTk(i, k)}
                                                    value={t}/>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )}

                    <div className={classes.center + ' row'}>
                        <Button onClick={addTimeSwitcher(i)}>
                            Добавить момент переключения
                        </Button>
                        <Button onClick={addParameter(i)}>
                            Добавить параметр управления
                        </Button>
                    </div>


                    {/* <IconButton className="close-btn" onClick={removeManager(i)} disabled={management.length === 1}>
                        <DeleteIcon />
                    </IconButton> */}
                </Paper>
            ))}
            {/* <Button onClick={addManager}>
                Добавить управление
            </Button> */}
        </div>
    );
}

export default connect(
    (state: IState) => ({
        management: state.task.managementStep,
        validity: state.task.validation.managementStep
    }),
    dispatch => ({
        addManager: () => dispatch({ type: 'MANAGER_ADD' }),
        updateManager: (key: keyof IManager, i: number) => (payload: any) => dispatch({
            type: 'MANAGER_UPDATE',
            payload: {
                key,
                value: payload.target.value,
                index: i
            }
        }),
        removeManager: (payload: number) => () => dispatch({ type: 'MANAGER_REMOVE', payload }),
        updateDudv: (i: number, j: number) => (payload: any) => dispatch({
            type: 'DUDV_UPDATE',
            payload: {
                value: payload.target.value,
                manager: i,
                dudv: j
            }
        }),
        updateV: (i: number, j: number, k: number) => (payload: any) => dispatch({
            type: 'V_UPDATE',
            payload: {
                value: payload.target.value,
                manager: i,
                interval: j,
                v: k
            }
        }),
        updateTk: (i: number, k: number) => (payload: any) => dispatch({
            type: 'TK_UPDATE',
            payload: {
                value: payload.target.value,
                manager: i,
                interval: k,
            }
        }),

        addParameter: (payload: number) => () => dispatch({ type: 'PARAMETER_ADD', payload }),
        removeParameter: (i: number, j: number) => () => dispatch({ type: 'PARAMETER_REMOVE', payload: {manager: i, parameter: j} }),
        addTimeSwitcher: (payload: number) => () => dispatch({ type: 'TIMESWITCHER_ADD', payload }),
        removeTimeSwitcher: (i: number, j: number) => () => dispatch({ type: 'TIMESWITCHER_REMOVE', payload: {manager: i, timeswitcher: j} }),
    })
)(Management);