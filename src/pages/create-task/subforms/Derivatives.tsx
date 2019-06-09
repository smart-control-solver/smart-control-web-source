import { IManager, IState, IValidation, IVariableStep, IDerivative } from '../../../store/state';
import React from 'react';
import { connect } from 'react-redux';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, TextField, FormHelperText, makeStyles } from '@material-ui/core';

type DerivativesType =  React.FC<{
    variables: IVariableStep,
    management: IManager[],
    derivatives: IDerivative,
    validity: IValidation['derivativeStep'];
    updateDfDx: (fIndex: number, xIndex: number) => (dfdx: any) => void;
    updateDfDu: (fIndex: number, uIndex: number) => (dfdu: any) => void;
}>;
const Derivatives: DerivativesType = ({variables, management, derivatives, validity, updateDfDx, updateDfDu}) => {
    return (
        <div className="column">
            <Paper className="column Paper">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            {variables.vars.map((v, i) => (
                                <TableCell key={i}>
                                    f{i}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {variables.vars.map((v, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row" className="row">
                                    <span>
                                        x{i}
                                    </span>
                                </TableCell>
                                {
                                    derivatives.dfdx[i].map((dfdx, k) => (
                                        <TableCell key={k} className="column">
                                            <TextField
                                                onChange={updateDfDx(i, k)}
                                                label={`df${i}/dx${k}`}
                                                error={!validity.valid && validity.passed && !dfdx}
                                                value={dfdx}/>
                                            {!validity.valid && validity.passed && !dfdx && (
                                                <FormHelperText error={true}>{`Укажите функцию df${i}/dx${k}`}</FormHelperText>
                                            )}
                                        </TableCell>
                                    )
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>

            <Paper className="column Paper">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            {variables.vars.map((v, i) => (
                                <TableCell key={i}>
                                    f{i}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {management.map((v, k) => (
                            <TableRow key={k}>
                                <TableCell component="th" scope="row" className="row">
                                    <span>
                                        u{k}
                                    </span>
                                </TableCell>
                                {
                                    variables.vars.map((v, i) => (
                                        <TableCell key={i} className="column">
                                            <TextField
                                                onChange={updateDfDu(i, k)}
                                                label={`df${i}/du${k}`}
                                                error={!validity.valid && validity.passed && !derivatives.dfdu[i][k]}
                                                value={derivatives.dfdu[i][k]}/>
                                            {!validity.valid && validity.passed && !derivatives.dfdu[i][k] && (
                                                <FormHelperText error={true}>{`Укажите функцию df${i}/du${k}`}</FormHelperText>
                                            )}
                                        </TableCell>
                                    )
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}

export default connect(
    (state: IState) => ({
        variables: state.editingTask.variableStep,
        management: state.editingTask.managementStep,
        derivatives: state.editingTask.derivativeStep,
        validity: state.editingTask.validation.derivativeStep
    }),
    dispatch => ({
        updateDfDx: (fIndex: number, xIndex: number) => (payload: any) => dispatch({ type: 'DFDX_UPDATE', payload: {
            fIndex,
            xIndex,
            dfdx: payload.target.value
        } }),
        updateDfDu: (fIndex: number, uIndex: number) => (payload: any) => dispatch({ type: 'DFDU_UPDATE', payload: {
            fIndex,
            uIndex,
            dfdu: payload.target.value
        }}),
    })
)(Derivatives);