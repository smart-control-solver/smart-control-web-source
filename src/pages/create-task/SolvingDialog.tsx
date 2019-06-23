import React from 'react';
import { Dialog, DialogTitle, Button, FormHelperText, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { IState } from '../../store/state';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
  statusInfo: {
    fontSize: '16px',
    padding: '16px 24px'
  }
})

type SolvingDialogType = React.FC<{
  cancel: () => void;
  history: any;
  calculating: IState['calculating'];
}>;

const SolvingDialog: SolvingDialogType = ({cancel, calculating, history}) => {
  const classes = useStyles();
  const showResults = () => history.push('/history');

  return (
    <Dialog onClose={cancel} open={calculating.inprogress}>
      <DialogTitle id="simple-dialog-title">Запущено решение</DialogTitle>
      {!calculating.progress && !calculating.error && !calculating.finished
        && <FormHelperText className={classes.statusInfo}>Подождите...</FormHelperText>}
      {calculating.progress && !calculating.error && !calculating.finished
        && <FormHelperText className={classes.statusInfo}>{calculating.progress}</FormHelperText>}
      {calculating.error && <FormHelperText error={true} className={classes.statusInfo}>{calculating.error}</FormHelperText>}
      {calculating.finished && <FormHelperText className={classes.statusInfo}>Решение найдено</FormHelperText>}
      <Button onClick={cancel}>
          Отменить
      </Button>
      <Button onClick={showResults} disabled={!calculating.finished}>
          Результаты
      </Button>
    </Dialog>
  );
}

export default withRouter<any>(connect(
  (state: IState) => ({
    calculating: state.calculating
  }),
  dispatch => ({
      cancel: () => dispatch({ type: 'WASM_CANCEL' }),
  })
)(SolvingDialog));