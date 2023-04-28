/* eslint-disable react-refresh/only-export-components */
import * as Dialog from "@radix-ui/react-dialog";
import { Settings } from "react-feather";
import { X } from "react-feather";
import { connect } from "react-redux";
import {
  setLongbreakTimer,
  setPomodoroTimer,
  setShortbreakTimer,
  setFont,
  setTheme,
} from "../redux/action";
import PomdoroForm from "./PomodoroForm";
import FontSelector from "./FontSelector";
import ThemeSelector from "./ThemeSelector";
import { colors } from "../utils/color";

function PomodoroRunningError({ currentFont }) {
  return (
    <div className={`mx-auto w-[80%] md:mx-0 md:ml-6 font-${currentFont}`}>
      <span className="text-xs text-red-600">
        Pomodoro is currently running! Changes cannot be applied
      </span>
    </div>
  );
}

function Modal({
  isRunning,
  currentFont,
  currentColor,
  updatePomodoroTime,
  updateShortBreakTime,
  updateLongBreakTime,
  updateFont,
  updateTheme,
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="setting-icon">
          <Settings />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="DialogContent top-[50%] h-[600px] w-[90vw] md:top-[40%] md:h-[450px] md:w-[50vw] lg:top-[45%] lg:h-[500px] lg:w-[30vw]"
        >
          <Dialog.Title
            className={`ml-6 mt-3 text-2xl font-bold font-${currentFont}`}
          >
            Settings
          </Dialog.Title>
          <hr className=" mt-4"></hr>
          <div
            className={`mx-auto ml-6 mt-4 font-${currentFont} flex w-[90%] justify-center gap-x-3 md:justify-start`}
          >
            <p className=" text-center text-sm font-bold tracking-widest">
              T I M E
            </p>
            <p className="text-center text-sm font-bold tracking-widest">
              ( M I N U T E S )
            </p>
          </div>
          {isRunning && <PomodoroRunningError currentFont={currentFont} />}
          <PomdoroForm currentFont={currentFont} />
          <hr className="mx-auto mt-6 w-[90%]" />
          <FontSelector currentFont={currentFont} updateFont={updateFont} />
          <hr className="mx-auto mt-6 w-[90%]" />
          <ThemeSelector
            currentColor={currentColor}
            currentFont={currentFont}
            updateTheme={updateTheme}
          />
          <Dialog.Close asChild>
            <button
              disabled={isRunning}
              onClick={() => {
                updatePomodoroTime();
                updateShortBreakTime();
                updateLongBreakTime();
              }}
              className={`absolute bottom-6 left-0 transition-[background] duration-[0.3s] font-${currentFont} right-0 mx-auto h-[40px] w-[100px] translate-y-[100%] rounded-3xl bg-[${colors[currentColor]}] text-sm font-bold text-white`}
            >
              Apply
            </button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Settingmodal({
  draftPomodoroStartTime,
  draftShortBreakStartTime,
  draftlongBreakStartTime,
  isRunning,
  currentFont,
  currentColor,
  setPomodoroTimer,
  setShortBreakTimer,
  setLongBreakTimer,
  setFont,
  setTheme,
}) {
  return (
    <Modal
      pomodoroTime={draftPomodoroStartTime}
      shortBreakTime={draftShortBreakStartTime}
      longBreakTime={draftlongBreakStartTime}
      isRunning={isRunning}
      updatePomodoroTime={setPomodoroTimer}
      updateShortBreakTime={setShortBreakTimer}
      updateLongBreakTime={setLongBreakTimer}
      currentFont={currentFont}
      currentColor={currentColor}
      updateFont={setFont}
      updateTheme={setTheme}
    />
  );
}

function mapStateToProps(state) {
  return {
    draftPomodoroStartTime: state.draftPomodoroStartTime,
    draftShortBreakStartTime: state.draftshortBreakStartTime,
    draftLongBreakStartTime: state.draftlongBreakStartTime,
    isRunning: state.isRunning,
    currentFont: state.currentFont,
    currentColor: state.currentColor,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPomodoroTimer: () => {
      dispatch(setPomodoroTimer());
    },
    setShortBreakTimer: () => {
      dispatch(setShortbreakTimer());
    },
    setLongBreakTimer: () => {
      dispatch(setLongbreakTimer());
    },
    setFont: (font) => {
      dispatch(setFont(font));
    },
    setTheme: (color) => {
      dispatch(setTheme(color));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settingmodal);
