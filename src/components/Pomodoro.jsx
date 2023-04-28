import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import {
  startTimer,
  stopTimer,
  DecreaseTimer,
  ResetTimer,
  setSession,
} from "../redux/action";

import "react-circular-progressbar/dist/styles.css";
import toast, { Toaster } from "react-hot-toast";
import Progressbar from "./Progressbar";
import Settingmodal from "./Settingmodal";
import { colors } from "../utils/color";

const pomodoroTimers = ["pomodoro", "short break", "long break"];

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function Pomodoro({
  timer,
  progress,
  startTimer,
  stopTimer,
  startCountDown,
  isRunning,
  currentSession,
  resetTimer,
  setSession,
  currentFont,
  currentColor,
}) {
  useEffect(() => {
    let intervalid = null;
    if (isRunning) {
      intervalid = setInterval(() => {
        startCountDown();
      }, 1000);
    }
    return () => {
      clearInterval(intervalid);
    };
  }, [isRunning]);

  const changeErrorNotify = () =>
    toast.error(
      `You are currently running a ${currentSession} session, stop the current session and then switch to other session`,
      { position: "top-right" }
    );

  return (
    <div
      className={`mx-auto mt-16 h-[90vh] font-${currentFont} md:w-[80%] lg:mt-4 lg:w-[50%]`}
    >
      <h1 className={`text-center text-2xl font-semibold text-[#d7e0ff]`}>
        pomodoro
      </h1>

      <section className="mx-auto mt-8 flex h-[60px] w-[90%] items-center justify-around rounded-full bg-[#161932] px-1 text-[#d7e0ff] md:w-[60%] md:px-0 lg:w-[50%]">
        {pomodoroTimers.map((options) => {
          return (
            <Fragment key={options}>
              <button
                disabled={currentSession === options.split(" ").join("")}
                onClick={(e) => {
                  isRunning
                    ? changeErrorNotify()
                    : setSession(e.target.textContent.split(" ").join(""));
                }}
                className={`text-xs font-bold text-[#1e213f] lg:text-sm ${
                  currentSession === options.split(" ").join("")
                    ? `bg-[${colors[currentColor]}]`
                    : "bg-none text-[#4e526b] transition-[color]  duration-[0.5s] lg:hover:text-[#D7E0FF]"
                } h-[80%] w-[110px] rounded-full transition-[background,color] duration-[0.3s]`}
              >
                {options}
              </button>
            </Fragment>
          );
        })}
      </section>
      <div className="mx-auto mt-14 flex h-[330px] w-[330px] items-center justify-center rounded-full  bg-gradient-to-r from-[#0e112a] to-[#2e325a] shadow-[-40px_-27px_42px_5px_#2e325a] md:h-[350px]  md:w-[350px] lg:h-[400px] lg:w-[400px]">
        <Progressbar
          timer={timer}
          progress={progress}
          startTimer={startTimer}
          stopTimer={stopTimer}
          isRunning={isRunning}
          resetTimer={resetTimer}
          currentColor={currentColor}
        />
      </div>
      <Toaster />
      <div className="absolute bottom-8 left-0 right-0 mx-auto flex  h-[50px] w-[50px] items-center justify-center lg:bottom-2">
        <Settingmodal />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    timer: state.timer,
    isRunning: state.isRunning,
    progress: state.progress,
    currentSession: state.currentSession,
    currentFont: state.currentFont,
    currentColor: state.currentColor,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startTimer: () => {
      dispatch(startTimer());
    },
    stopTimer: () => {
      dispatch(stopTimer());
    },
    startCountDown: () => {
      dispatch(DecreaseTimer());
    },
    resetTimer: () => {
      dispatch(ResetTimer());
    },
    setSession: (session) => {
      dispatch(setSession(session));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro);
