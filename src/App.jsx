import { Provider } from "react-redux";
import { store } from "./redux/store";
import Pomodoro from "./components/Pomodoro";

function App() {
  return (
    <Provider store={store}>
      <Pomodoro />
    </Provider>
  );
}

export default App;
