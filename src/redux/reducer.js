import {
  SET_SESSION,
  SET_THEME,
  SET_FONT,
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER,
  DECREASE_TIMER,
  SET_POMODORO_TIMER,
  SET_SHORTBREAK_TIMER,
  SET_LONGBREAK_TIMER,
  SET_DRAFT_POMODORO_TIMER,
  SET_DRAFT_SHORTBREAK_TIMER,
  SET_DRAFT_LONGBREAK_TIMER,
} from "./action";

const initialState = {
  currentSession: "pomodoro",
  timer: 25 * 60,
  pomodoroStartTime: 25 * 60,
  shortBreakStartTime: 5 * 60,
  longBreakStartTime: 15 * 60,
  draftPomodoroStartTime: 25,
  draftshortBreakStartTime: 5,
  draftlongBreakStartTime: 15,
  isRunning: false,
  currentFont: "Kumbhsans",
  currentColor: "Orange",
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
        pomodoroStartTime:
          state.currentSession === "pomodoro"
            ? state.pomodoroStartTime - 1
            : state.pomodoroStartTime,
        shortBreakStartTime:
          state.currentSession === "shortbreak"
            ? state.shortBreakStartTime - 1
            : state.shortBreakStartTime,
        longBreakStartTime:
          state.currentSession === "longbreak"
            ? state.longBreakStartTime - 1
            : state.longBreakStartTime,
        progress: Math.round(
          ((state.timer - 1) /
            (state.currentSession === "pomodoro"
              ? state.draftPomodoroStartTime * 60
              : state.currentSession === "shortbreak"
              ? state.draftshortBreakStartTime * 60
              : state.draftlongBreakStartTime * 60)) *
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
          ? state.draftPomodoroStartTime * 60
          : state.currentSession === "shortbreak"
          ? state.draftshortBreakStartTime * 60
          : state.draftlongBreakStartTime * 60,
      pomodoroStartTime: state.draftPomodoroStartTime * 60,
      shortBreakStartTime: state.draftshortBreakStartTime * 60,
      longBreakStartTime: state.draftlongBreakStartTime * 60,
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
          ? state.draftPomodoroStartTime * 60
          : action.payload === "shortbreak"
          ? state.draftshortBreakStartTime * 60
          : state.draftlongBreakStartTime * 60,
    };
  }

  if (action.type === SET_FONT) {
    return {
      ...state,
      currentFont: action.payload,
    };
  }

  if (action.type === SET_THEME) {
    return {
      ...state,
      currentColor: action.payload,
    };
  }

  if (action.type === SET_POMODORO_TIMER) {
    return {
      ...state,
      pomodoroStartTime: Number(state.draftPomodoroStartTime * 60),
      progress: 100,
      timer:
        state.timer === state.pomodoroStartTime
          ? Number(state.draftPomodoroStartTime * 60)
          : state.timer,
    };
  }

  if (action.type === SET_DRAFT_POMODORO_TIMER) {
    return {
      ...state,
      draftPomodoroStartTime: action.payload,
    };
  }

  if (action.type === SET_SHORTBREAK_TIMER) {
    return {
      ...state,
      shortBreakStartTime: Number(state.draftshortBreakStartTime * 60),
      timer:
        state.timer === state.shortBreakStartTime
          ? Number(state.draftshortBreakStartTime) * 60
          : state.timer,
    };
  }

  if (action.type === SET_DRAFT_SHORTBREAK_TIMER) {
    return {
      ...state,
      draftshortBreakStartTime: action.payload,
    };
  }

  if (action.type === SET_LONGBREAK_TIMER) {
    return {
      ...state,
      longBreakStartTime: Number(state.draftlongBreakStartTime * 60),
      timer:
        state.timer === state.longBreakStartTime
          ? Number(state.draftlongBreakStartTime * 60)
          : state.timer,
    };
  }

  if (action.type === SET_DRAFT_LONGBREAK_TIMER) {
    console.log(action.payload);
    return {
      ...state,
      draftlongBreakStartTime: action.payload,
    };
  }

  return state;
}
