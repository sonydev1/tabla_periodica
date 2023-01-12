import axios from 'axios';
import { useEffect, useState } from 'react';
import PeriodicTable from './layout/PeriodicTable';


function App() {
  const [element,setElement] = useState([])

  const options = {
    method: "GET",
    url: process.env.REACT_APP_URL,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_Key,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPIdAPI_HOST,
    }
  };


   useEffect(() => {
     data();
   }, []);
  
  async function data () {
    await axios(options).then(
     function  (res) {
        setElement(res.data)
        console.log(res.data);
      }).catch(function (error) {
      console.log(error);
    })
  
   
     
  }


  return (
    <>
      <div className=" lg:px-2  py-1">
        <PeriodicTable />
        <h1>Hola h88</h1>
        {element.map((item) => item.atomicNumber + item.name)}
      </div>
    </>
  );
}

export default App;
