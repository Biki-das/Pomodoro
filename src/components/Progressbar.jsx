import { formatTime } from "../utils/formatTime";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Progressbar({
  timer,
  progress,
  startTimer,
  stopTimer,
  isRunning,
  resetTimer,
}) {
  return (
    <div className="mx-auto h-[90%] w-[90%]">
      <CircularProgressbarWithChildren
        value={progress}
        strokeWidth={3}
        background
        backgroundPadding={3}
        styles={{
          path: {
            stroke: "#f87070",
            strokeLinecap: "round",
            transition: "stroke-dashoffset 0.5s ease 0s",
          },
          text: {
            fill: "#FF4500",
            fontSize: "24px",
          },
          trail: {
            stroke: "none",
            strokeLinecap: "round",
          },
          background: {
            fill: "#0e112a",
          },
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <span className="block text-[70px] font-extrabold text-white md:text-[80px]">
            {formatTime(timer)}
          </span>
          {timer > 0 ? (
            <button
              id="action"
              className="text-white transition-[color] duration-[0.3s] hover:text-[#f87070]"
              onClick={isRunning ? stopTimer : startTimer}
            >
              {`${isRunning ? `P A U S E` : `S T A R T`}`}
            </button>
          ) : (
            <button
              id="action"
              className="font-extrabold text-white transition-[color] duration-[0.3s] hover:text-[#f87070]"
              onClick={resetTimer}
            >
              R E S E T
            </button>
          )}
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}

export default Progressbar;