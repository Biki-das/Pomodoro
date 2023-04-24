import {
  SET_SESSION,
  SET_THEME,
  SET_FONT,
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER,
  DECREASE_TIMER,
} from "./action";

const initialState = {
  currentSession: "pomodoro",
  timer: 25 * 60,
  pomodoroStartTime: 25 * 60,
  shortBreakStartTime: 5 * 60,
  longBreakStartTime: 15 * 60,
  isRunning: false,
  font: "Roboto",
  color: "orange",
  progress: 100,
};

export function reducer(state = initialState, action) {
  if (action.type === START_TIMER) {
    return {
      ...state,
      isRunning: true,
    };
  }

  if (action.type === STOP_TIMER) {
    return {
      ...state,
      isRunning: false,
    };
  }

  if (action.type === DECREASE_TIMER) {
    if (state.timer === 0) {
      return {
        ...state,
        isRunning: false,
      };
    } else {
      return {
        ...state,
        timer: state.timer - 1,
        progress: Math.round(
          ((state.timer - 1) /
            (state.currentSession === "pomodoro"
              ? state.pomodoroStartTime
              : state.currentSession === "shortbreak"
              ? state.shortBreakStartTime
              : state.longBreakStartTime)) *
            100
        ),
      };
    }
  }

  if (action.type === RESET_TIMER) {
    return {
      ...state,
      timer:
        state.currentSession === "pomodoro"
          ? state.pomodoroStartTime
          : state.currentSession === "shortbreak"
          ? state.shortBreakStartTime
          : state.longBreakStartTime,
      progress: 100,
      isRunning: false,
    };
  }

  if (action.type === SET_SESSION) {
    return {
      ...state,
      isRunning: false,
      progress: 100,
      currentSession: action.payload,
      timer:
        action.payload === "pomodoro"
          ? state.pomodoroStartTime
          : action.payload === "shortbreak"
          ? state.shortBreakStartTime
          : state.longBreakStartTime,
    };
  }

  if (action.type === SET_FONT) {
    return {
      ...state,
      font: action.payload,
    };
  }

  if (action.type === SET_THEME) {
    return {
      ...state,
      theme: action.payload,
    };
  }

  return state;
}
