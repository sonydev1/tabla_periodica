import React from "react";

function Element({ elemen }) {
  if (elemen !== undefined) {
    return (
      <div
        style={{ background: elemen.color, color: elemen.textColor }}
        className="  md:w-[61.78px] md:h-[80px] xl:w-[90px] xl:h-[90px]  rounded-md"
        key={elemen.id}
      >
        <button className="w-full  px-2 ">
          <div className="text-end">
            <div>
              <p className="text-[12px] xl:text-md ">{elemen.id}</p>
            </div>
          </div>
          <div className="text-left">
            <p className="text-3xl   font-semibold">
              {elemen.simbolo}
            </p>
              <p className="text-[8.7px] ">{elemen.n_atomico}</p>
            <p className=" text-[9px] mt-1 w-9 break-normal">{elemen.name}</p>
          </div>
        </button>
      </div>
    );
  }
}

export  {Element};
