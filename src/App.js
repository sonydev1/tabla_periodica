import PeriodicTable from "./layout/PeriodicTable";
import data from "./data/data.json";
import PeriodicTable2 from './layout/PeriodicTable2';

function App() {
  return (
    <div className="container mx-auto px-4">
      {/*  <PeriodicTable data={data} /> */}
      <PeriodicTable2 data={data} />
    </div>
  );
}

export default App;
