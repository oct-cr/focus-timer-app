export const actionTypes = {
  TIMER_START: 'TIMER_START',
  TIMER_STOP: 'TIMER_STOP',
  TIMER_TICK: 'TIMER_TICK'
}


export const start = remainingSeconds => dispatch => {
  const timerId = setInterval(
    () =>
      dispatch({
        type: actionTypes.TIMER_TICK
      })
    , 1000)

  dispatch({
    type: actionTypes.TIMER_START,
    timerId,
    remainingSeconds
  })
}


export const stop = () => ({
  type: actionTypes.TIMER_STOP
})
