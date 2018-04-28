import { actionTypes } from '../actions/timer'


const STATUSES = {
  BREAK: 'BREAK',
  FOCUS: 'FOCUS',
  STOPPED: 'STOPPED'
}

const initialState = {
  remainingSeconds: 0,
  status: STATUSES.STOPPED,
  timerId: null
}


export function timerReducer(state = initialState, action) {

  switch (action.type) {

    case actionTypes.TIMER_START_BREAK:
      clearInterval(state.timerId)

      const breakTimerId = setInterval(action.callback, 1000)

      return {
        ...state,
        remainingSeconds: action.remainingSeconds,
        status: STATUSES.BREAK,
        timerId: breakTimerId
      }


    case actionTypes.TIMER_START_FOCUS:
      clearInterval(state.timerId)

      const focusTimerId = setInterval(action.callback, 1000)

      return {
        ...state,
        remainingSeconds: action.remainingSeconds,
        status: STATUSES.FOCUS,
        timerId: focusTimerId
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
