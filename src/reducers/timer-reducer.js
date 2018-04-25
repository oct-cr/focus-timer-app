import { actionTypes } from '../actions/timer'


const initialState = {
  remainingSeconds: 0,
  timerId: null
}


export function timerReducer(state = initialState, action) {

  switch (action.type) {
    case actionTypes.TIMER_START:
      return {
        ...state,
        remainingSeconds: action.remainingSeconds,
        timerId: action.timerId
      }
    case actionTypes.TIMER_STOP:
      clearInterval(state.timerId)
      return initialState
    case actionTypes.TIMER_TICK:
      const remainingSeconds = state.remainingSeconds - 1

      if (remainingSeconds > 0) {
        return {
          ...state,
          remainingSeconds
        }
      }

      clearInterval(state.timerId)
      return initialState
    default:
      return state
  }

}
