export const actionTypes = {
  TIMER_START: 'TIMER_START',
  TIMER_STOP: 'TIMER_STOP',
  TIMER_TICK: 'TIMER_TICK'
}


export const start = remainingSeconds => dispatch => {
  dispatch({
    type: actionTypes.TIMER_START,
    callback: () =>
      dispatch({
        type: actionTypes.TIMER_TICK
      }),
    remainingSeconds
  })
}


export const stop = () => ({
  type: actionTypes.TIMER_STOP
})
