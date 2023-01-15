import React from "react";

function Element({ elemen }) {
  if (elemen !== undefined) {
    return (
      <div
        style={{ background: elemen.color, color: elemen.textColor }}
        className="flex-none w-[84px] h-[90px]  rounded-md"
        key={elemen.id}
      >
        <button className="w-full px-2">
          <div className="text-end">
            <div>
              <p className="text-[12px] xl:text-md font-bold">{elemen.id}</p>
            </div>
          </div>
          <div className="text-left">
            <p className="text-3xl font-semibold -mt-1">{elemen.simbolo}</p>
            <p className="text-[9px] ">{elemen.n_atomico}</p>
            <p className=" text-[12px]  break-all">{elemen.name}</p>
          </div>
        </button>
      </div>
    );
  }
}

export  {Element};
