import React from "react";

function Element({ elemen }) {
  if (elemen !== undefined) {
    let color = 'bg-[red]';
    let color2 = `bg-[${elemen.color}]`
    
     /* 'bg-['+ elemen.color +']' */
    console.log(color2);
    return (
      <div
        className={`${color2}  w-[61.78px] h-[80px] xl:w-[90px] xl:h-[90px]  rounded-md`}
        key={elemen.id}
      >
        <button className="w-full  px-2 ">
          <div className="flex  justify-between ">
            <div>
              <p className="text-sm xl:text-lg ">{elemen.id}</p>
            </div>
            <div>
              <p className="text-[10px] xl:text-sm mt-1 ">{elemen.n_atomico}</p>
            </div>
          </div>
          <div>
            <p className="text-3xl xl:text-4xl font-bold">{elemen.simbolo}</p>
            <p className="text-[10px]">{elemen.name}</p>
          </div>
        </button>
      </div>
    );
  }
}

export default Element;
