import {PeriodicTable} from "./layout/PeriodicTable";
import data from "./data/data.json";

function App() {
  return (
    <div className="container mx-auto py-5">
     
      <PeriodicTable data={data} />
    </div>
  );
}

export default App;
