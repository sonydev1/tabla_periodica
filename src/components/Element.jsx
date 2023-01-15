import React from "react";

function Element({ elemen }) {
  if (elemen !== undefined) {
    return (
      <div
        style={{ background: elemen.color, color: elemen.textColor }}
        className="w-[61.78px] h-[82px]  md:w-[61.78px] md:h-[82px] xl:w-[90px] xl:h-[92px]  rounded-md"
        key={elemen.id}
      >
        <button className="w-full px-2">
          <div className="text-end">
            <div>
              <p className="text-[12px] xl:text-md font-bold">{elemen.id}</p>
            </div>
          </div>
          <div className="text-left">
            <p className="text-3xl font-semibold -mt-2">{elemen.simbolo}</p>
            <p className="text-[9px] ">{elemen.n_atomico}</p>
            <p className=" text-[10px]  break-all">{elemen.name}</p>
          </div>
        </button>
      </div>
    );
  }
}

export  {Element};
