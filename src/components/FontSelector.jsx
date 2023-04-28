function FontSelector({ currentFont, updateFont }) {
  return (
    <div className="mx-auto mt-4 flex w-[90%] flex-col items-center justify-between md:flex-row">
      <p
        className={`text-center font-${currentFont} text-sm font-bold tracking-widest`}
      >
        F O N T
      </p>
      <div className="mt-4 flex gap-x-6">
        <div className="relative flex items-center justify-center">
          <input
            id="Kumbhsans"
            checked={"Kumbhsans" === currentFont}
            type="radio"
            name="font-selector"
            className="font h-[40px] w-[40px] cursor-pointer appearance-none rounded-full border-2 transition-[background] duration-[0.3s] checked:bg-black"
            onChange={() => {
              updateFont("Kumbhsans");
            }}
          />
          <label
            htmlFor="Kumbhsans"
            className={`pointer-events-none absolute font-Kumbhsans`}
          >
            Aa
          </label>
        </div>
        <div className="relative flex items-center justify-center">
          <input
            id="Robotoslab"
            checked={"Robotoslab" === currentFont}
            type="radio"
            name="font-selector"
            className="font h-[40px] w-[40px] cursor-pointer appearance-none rounded-full border-2 transition-[background] duration-[0.3s] checked:bg-black"
            onChange={() => {
              updateFont("Robotoslab");
            }}
          />
          <label
            htmlFor="Robotoslab"
            className={`pointer-events-none absolute font-Robotoslab`}
          >
            Aa
          </label>
        </div>
        <div className="relative flex items-center justify-center">
          <input
            id="Spacemono"
            checked={"Spacemono" === currentFont}
            type="radio"
            name="font-selector"
            className="font h-[40px] w-[40px] cursor-pointer appearance-none rounded-full border-2 transition-[background] duration-[0.3s] checked:bg-black"
            onChange={() => {
              updateFont("Spacemono");
            }}
          />
          <label
            htmlFor="Spacemono"
            className={`pointer-events-none absolute font-Spacemono`}
          >
            Aa
          </label>
        </div>
      </div>
    </div>
  );
}

export default FontSelector;
