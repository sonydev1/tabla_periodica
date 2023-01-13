import React from "react";

function Element({ elemen }) {
  if (elemen !== undefined) {
    return (
      <div
        style={{ background: elemen.color, color: elemen.textColor }}
        className="  w-[61.78px] h-[80px] xl:w-[90px] xl:h-[90px]  rounded-md"
        key={elemen.id}
      >
        <button className="w-full  px-2 ">
          <div className="flex  justify-between ">
            <div>
              <p className="text-sm xl:text-md ">{elemen.id}</p>
            </div>
            <div>
              <p className="text-[10px] xl:text-[10px] mt-1 ">{elemen.n_atomico}</p>
            </div>
          </div>
          <div>
            <p className="text-3xl  xl:text-4xl font-bold">
              {elemen.simbolo}
            </p>
            <p className="text-[11px] mt-1">{elemen.name}</p>
          </div>
        </button>
      </div>
    );
  }
}

export  {Element};
