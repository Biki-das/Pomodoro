import { reducer } from "./reducer";
import { createStore } from "redux";
import { initialState } from "./reducer";

export const store = createStore(
  reducer,
  JSON.parse(localStorage.getItem("state")) || initialState
);

store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});
