export const actionTypes = {
  TIMER_START_BREAK: 'TIMER_START_BREAK',
  TIMER_START_FOCUS: 'TIMER_START_FOCUS',
  TIMER_STOP: 'TIMER_STOP',
  TIMER_TICK: 'TIMER_TICK'
}


export const tick = () => ({
  type: actionTypes.TIMER_TICK
})


export const startBreak = remainingSeconds => dispatch => {
  dispatch({
    type: actionTypes.TIMER_START_BREAK,
    callback: () => dispatch(tick()),
    remainingSeconds
  })
}


export const startFocus = remainingSeconds => dispatch => {
  dispatch({
    type: actionTypes.TIMER_START_FOCUS,
    callback: () => dispatch(tick()),
    remainingSeconds
  })
}


export const stop = () => ({
  type: actionTypes.TIMER_STOP
})
