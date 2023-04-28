import { Check } from "react-feather";
import { colors } from "../utils/color";

const colorTypes = ["Orange", "Teal", "Purple"];

function ThemeSelector({ currentFont, currentColor, updateTheme }) {
  return (
    <div className="mx-auto  mt-4 flex w-[90%] flex-col items-center justify-between md:flex-row">
      <p
        className={`text-center font-${currentFont} text-sm font-bold tracking-widest`}
      >
        C O L O R
      </p>
      <div className="mt-4 flex gap-x-6">
        {colorTypes.map((color) => {
          return (
            <div
              key={color}
              className="relative flex items-center justify-center"
            >
              <input
                type="radio"
                name="color-selector"
                className={`h-[40px] w-[40px] cursor-pointer appearance-none rounded-full border-2 bg-[${colors[color]}] transition-[background] duration-[0.3s]`}
                onChange={() => {
                  updateTheme(color);
                }}
              />
              {currentColor === color && (
                <div className="absolute">
                  <Check />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ThemeSelector;
