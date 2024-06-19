function ColorPalette() {
  const setColor = () => {};
  return (
    <>
      <div className="border absolute right-0 p-2 m-2 cursor-pointer">
        <p className="text-md font-semibold">Dark mode colors</p>
        <div
          className="flex flex-row jusitfy-center items-center align-middle border border-white gap-2"
          onClick={setColor}
        >
          <div className="bg-blue-900 w-2 h-2"></div>
          <span>Blue</span>
        </div>
        <div className="flex flex-row jusitfy-center items-center align-middle border border-white gap-2">
          <div className="bg-red-900 w-2 h-2"></div>
          <span>Red</span>
        </div>
      </div>
    </>
  );
}
export default ColorPalette;
