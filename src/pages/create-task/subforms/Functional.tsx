import React from 'react';
import { connect } from 'react-redux';
import { TextField, FormControl, FormControlLabel, Checkbox, FormHelperText } from '@material-ui/core';
import { IState, IFunctional, IValidation } from '../../../store/state';

type FunctionalComponent = React.FC<{
    functional: IFunctional;
    validity: IValidation['functionalStep'];
    updateFunctional: (payload: IFunctional) => void}
>;
const Functional: FunctionalComponent = ({functional, validity, updateFunctional}) => {
        const handleChange = (key: keyof IFunctional) => (payload: any) => {
            updateFunctional({
                ...functional,
                [key]: payload.target.value
            });
        };

        return (
            <div className="column">
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
                <div className="row">
                    <TextField
                        label="Начальный момент времени"
                        onChange={handleChange('t0')}
                        value={functional.t0}
                    />
                    <TextField
                        label="Конечный момент времени"
                        onChange={handleChange('T')}
                        value={functional.T}
                    />
                </div>
            </div>
        );
    }



export default connect(
    (state: IState) => ({
        functional: state.editingTask.functionalStep,
        validity: state.editingTask.validation.functionalStep
    }),
    dispatch => ({
        updateFunctional: (payload: IFunctional) => dispatch({ type: 'FUNCTIONAL_UPDATE', payload }),
    })
)(Functional);