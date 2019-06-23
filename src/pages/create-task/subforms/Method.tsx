import React from 'react';
import { connect } from 'react-redux';
import { Paper, Select, MenuItem, TextField } from '@material-ui/core';
import { IState, IMethod } from '../../../store/state';

// const useStyles = makeStyles(theme => ({
//     block: {
//       marginTop: theme.spacing(4),
//     },
// }));

type MethodComponent = React.FC<{
    method: IMethod;
    updateMethod: (key: keyof IMethod) => (event: any) => void;
}>;
const Method: MethodComponent = ({method, updateMethod}) => {
    return (
        <Paper className="column Paper">
            <Select
                value={method.name}
                onChange={updateMethod('name')}>
                <MenuItem value={'Newton'}>Метод Ньютона</MenuItem>
                <MenuItem value={'Grad'}>Метод градиентного спуска</MenuItem>
            </Select>
            <Select
                value={method.type}
                onChange={updateMethod('type')}>
                <MenuItem value={'digit'}>Численный</MenuItem>
                <MenuItem value={'anal'}>Аналитический</MenuItem>
            </Select>
            <div className="row">
                <TextField
                    label={'Шаг интегрирования'}
                    onChange={updateMethod('step')}
                    type="number"
                    value={method.step}
                />
                <TextField
                    label={'Частота дискретизация'}
                    onChange={updateMethod('descr')}
                    type="number"
                    value={method.descr}
                    helperText="для кеширования результатов"
                />
            </div>
        </Paper>
    );
}

export default connect(
    (state: IState) => ({
        method: state.task.methodStep,
    }),
    dispatch => ({
        updateMethod: (key: keyof IMethod) => (event: any) => dispatch({ type: 'METHOD_UPDATE', payload: {
            key,
            value: event.target.value
        } }),
    })
)(Method);