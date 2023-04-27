import { reducer } from "./reducer";
import { createStore } from "redux";
import {
  setDraftLongTimer,
  setDraftPomodoroTimer,
  setDraftShortTimer,
  setLongbreakTimer,
  setPomodoroTimer,
  setShortbreakTimer,
} from "./action";

export const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});
