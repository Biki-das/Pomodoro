import { connect } from "react-redux";
import { ChevronUp, ChevronDown } from "react-feather";
import {
  setDraftPomodoroTimer,
  setDraftShortTimer,
  setDraftLongTimer,
} from "../redux/action";

function PomdoroForm({
  draftPomodoroStartTime,
  draftShortBreakStartTime,
  draftLongBreakStartTime,
  setDraftPomodoroTimer,
  setDraftshortBreakTimer,
  setDraftLongBreakTimer,
  currentFont,
}) {
  return (
    <>
      <div
        className={`mx-auto mt-6 w-[90%] justify-between font-${currentFont} md:flex md:gap-x-4`}
      >
        <div className="flex items-center justify-between md:flex-col md:items-start">
          <label
            htmlFor="pomodoro"
            className="block text-xs font-semibold text-[#4e526b]"
          >
            pomodoro
          </label>
          <div className="relative">
            <input
              id="pomodoro"
              type="number"
              className="mt-2 h-[50px] w-full rounded-xl bg-[#eff1fa] px-2 text-xs font-bold focus:outline-none"
              value={draftPomodoroStartTime}
              onChange={(e) => {
                setDraftPomodoroTimer(e.target.valueAsNumber);
              }}
            />
            <div className="absolute right-1 top-[30%]">
              <button
                className="block "
                onClick={() => {
                  setDraftPomodoroTimer(Number(draftPomodoroStartTime) + 1);
                }}
              >
                <ChevronUp size={18} className="arrowButton cursor-pointer" />
              </button>
              <button
                className="block"
                onClick={() => {
                  setDraftPomodoroTimer(
                    Number(draftPomodoroStartTime) > 0
                      ? Number(draftPomodoroStartTime) - 1
                      : 0
                  );
                }}
              >
                <ChevronDown size={18} className="arrowButton cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between md:flex-col md:items-start">
          <label
            htmlFor="shortbreak"
            className="block text-xs font-semibold text-[#4e526b]"
          >
            short break
          </label>
          <div className="relative">
            <input
              id="shortbreak"
              type="number"
              className="mt-2 h-[50px] w-full rounded-xl bg-[#eff1fa] px-2 text-xs font-bold focus:outline-none"
              value={draftShortBreakStartTime}
              onChange={(e) => {
                setDraftshortBreakTimer(e.target.valueAsNumber);
              }}
            />
            <div className="absolute right-1 top-[30%]">
              <button
                className="block"
                onClick={() => {
                  setDraftshortBreakTimer(Number(draftShortBreakStartTime) + 1);
                }}
              >
                <ChevronUp size={18} className="arrowButton cursor-pointer" />
              </button>
              <button
                className="block"
                onClick={() => {
                  setDraftshortBreakTimer(
                    Number(draftShortBreakStartTime) > 0
                      ? Number(draftShortBreakStartTime) - 1
                      : 0
                  );
                }}
              >
                <ChevronDown size={18} className="arrowButton cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between md:flex-col md:items-start">
          <label
            htmlFor="longbreak"
            className="block text-xs font-semibold text-[#4e526b]"
          >
            long break
          </label>
          <div className="relative">
            <input
              id="longbreak"
              type="number"
              className="mt-2 h-[50px] w-full rounded-xl bg-[#eff1fa] px-2 text-xs font-bold focus:outline-none"
              value={draftLongBreakStartTime}
              onChange={(e) => {
                setDraftLongBreakTimer(e.target.valueAsNumber);
              }}
            />
            <div className="absolute right-1 top-[30%]">
              <button
                className="block"
                onClick={() => {
                  setDraftLongBreakTimer(draftLongBreakStartTime + 1);
                }}
              >
                <ChevronUp size={18} className="arrowButton cursor-pointer" />
              </button>
              <button
                className="block"
                onClick={() => {
                  setDraftLongBreakTimer(
                    Number(draftLongBreakStartTime) > 0
                      ? Number(draftLongBreakStartTime) - 1
                      : 0
                  );
                }}
              >
                <ChevronDown size={18} className="arrowButton cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    draftPomodoroStartTime: state.draftPomodoroStartTime,
    draftShortBreakStartTime: state.draftshortBreakStartTime,
    draftLongBreakStartTime: state.draftlongBreakStartTime,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setDraftPomodoroTimer: (timer) => {
      dispatch(setDraftPomodoroTimer(timer));
    },
    setDraftshortBreakTimer: (timer) => {
      dispatch(setDraftShortTimer(timer));
    },
    setDraftLongBreakTimer: (timer) => {
      dispatch(setDraftLongTimer(timer));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PomdoroForm);
