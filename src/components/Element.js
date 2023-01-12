import React from "react";

function Element() {
  return (
    <div className="bg-orange-600 lg:w-[61.78px] lg:h-[80px]   rounded-md ">
      <button className="w-full  px-2 ">
        <div className="flex  justify-between ">
          <div>
            <p className="text-sm">1</p>
          </div>
          <div>
            <p className="text-[10px]">4.0</p>
          </div>
        </div>
        <div>
          <p className="text-3xl font-bold">H</p>
          <p className="text-[10px]">Hidrógeno</p>
        </div>
      </button>
    </div>
  );
}

export default Element;
