export const SET_SESSION = "SET_SESSION";
export const SET_THEME = "SET_THEME";
export const SET_FONT = "SET_FONT";
export const START_TIMER = "START_TIMER";
export const STOP_TIMER = "STOP_TIMER";
export const RESET_TIMER = "RESET_TIMER";
export const DECREASE_TIMER = "DECREASE_TIMER";

export function setSession(session) {
  return {
    type: SET_SESSION,
    payload: session,
  };
}

export function setTheme(theme) {
  return {
    type: SET_THEME,
    payload: theme,
  };
}

export function setFont(font) {
  return {
    type: SET_FONT,
    payload: font,
  };
}

export function startTimer() {
  return {
    type: START_TIMER,
  };
}

export function stopTimer() {
  return {
    type: STOP_TIMER,
  };
}

export function ResetTimer() {
  return {
    type: RESET_TIMER,
  };
}

export function DecreaseTimer() {
  return {
    type: DECREASE_TIMER,
  };
}
