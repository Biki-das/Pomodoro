/* eslint-disable react-refresh/only-export-components */
import * as Dialog from "@radix-ui/react-dialog";
import { Settings } from "react-feather";
import { X } from "react-feather";
import { connect } from "react-redux";
import {
  setLongbreakTimer,
  setPomodoroTimer,
  setShortbreakTimer,
} from "../redux/action";
import PomdoroForm from "./PomodoroForm";

function PomodoroRunningError() {
  return (
    <div className="mx-auto w-[80%] md:mx-0 md:ml-6">
      <span className="text-xs text-red-600">
        Pomodoro is currently running! Changes cannot be applied
      </span>
    </div>
  );
}

function Modal({
  pomodoroTime,
  shortBreakTime,
  longBreakTime,
  isRunning,
  updatePomodoroTime,
  updateShortBreakTime,
  updateLongBreakTime,
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
          <Dialog.Title className="ml-6 mt-3 text-2xl font-bold">
            Settings
          </Dialog.Title>
          <hr className=" mt-4"></hr>
          <div className="mx-auto ml-6 mt-4 flex w-[90%] justify-center gap-x-3 md:justify-start">
            <p className=" text-center text-sm font-bold tracking-widest">
              T I M E
            </p>
            <p className="text-center text-sm font-bold tracking-widest">
              ( M I N U T E S )
            </p>
          </div>
          {isRunning && <PomodoroRunningError />}
          <PomdoroForm />
          <Dialog.Close asChild>
            <button
              disabled={isRunning}
              onClick={() => {
                updatePomodoroTime();
                updateShortBreakTime();
                updateLongBreakTime();
              }}
              className="absolute bottom-6 left-0 right-0 mx-auto h-[40px] w-[100px] translate-y-[100%] rounded-3xl bg-[#f87070] text-sm font-bold text-white"
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
  setPomodoroTimer,
  setShortBreakTimer,
  setLongBreakTimer,
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
    />
  );
}

function mapStateToProps(state) {
  return {
    draftPomodoroStartTime: state.draftPomodoroStartTime,
    draftShortBreakStartTime: state.draftshortBreakStartTime,
    draftLongBreakStartTime: state.draftlongBreakStartTime,
    isRunning: state.isRunning,
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settingmodal);
