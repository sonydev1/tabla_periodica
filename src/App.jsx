import {PeriodicTable} from "./layout/PeriodicTable";
import data from "./data/data.json";

function App() {
  return (
    <div className="w-[412%] h-[10%] xl:w-full xl:h-full   xl:flex   xl:justify-center  mx-auto p-4 bg-rose-400 ">
     
        
      <PeriodicTable data={data} />
     
     
    </div>
  );
}

export default App;
