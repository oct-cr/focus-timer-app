import { actionTypes } from '../actions/timer'

import { STATUSES } from '../constants'


const initialState = {
  endTimestamp: null,
  remainingSeconds: 0,
  status: STATUSES.STOPPED,
  timerId: null
}


function getTimestampPlusSeconds(seconds) {
  const date = new Date()
  date.setSeconds(date.getSeconds() + seconds)
  return date.getTime()
}


export function timerReducer(state = initialState, action) {

  switch (action.type) {

    case actionTypes.TIMER_START_BREAK:
      clearInterval(state.timerId)

      const breakTimerId = setInterval(action.callback, 1000)

      return {
        ...state,
        endTimestamp: getTimestampPlusSeconds(action.remainingSeconds),
        remainingSeconds: action.remainingSeconds,
        status: STATUSES.BREAK,
        timerId: breakTimerId
      }


    case actionTypes.TIMER_START_FOCUS:
      clearInterval(state.timerId)

      const focusTimerId = setInterval(action.callback, 1000)

      return {
        ...state,
        endTimestamp: getTimestampPlusSeconds(action.remainingSeconds),
        remainingSeconds: action.remainingSeconds,
        status: STATUSES.FOCUS,
        timerId: focusTimerId
      }


    case actionTypes.TIMER_STOP:
      clearInterval(state.timerId)
      return initialState


    case actionTypes.TIMER_TICK:
      const now = new Date().getTime()
      const remainingSeconds = Math.round((state.endTimestamp - now) / 1000)

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
