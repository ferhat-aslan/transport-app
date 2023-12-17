/* eslint-disable no-unused-vars */
import "./App.css";
import L from "leaflet";

import { MyContext } from "./MyContext";
import MapComponent from "./components/MapComponent/MapComponent";
import { useContext, useState } from "react";
function App() {
 
  const [coord, setCoord] = useState([])
  return (
    <MyContext.Provider value={coord}>
    <div className="App">
      <section className="list-frame">
        <MapComponent setCoord = {setCoord} />
      </section>
      <section className="input-frame mx-auto !px-4 ">
        <h1 className="font-bold text-2xl !mb-2 !mt-24">Berlin - Cologne</h1>
        <label>Customer Name</label>
        <input
          type="text"
          className="border border-1 border-solid border-slate-200 rounded-md !py-1 !pl-2"
          placeholder="Maersk Denmark Inc."
        />
        <label>Destination</label>
        <input
          type="text"
          className="border border-1 border-solid border-slate-200 rounded-md !py-1 !pl-2"
          placeholder="Berlin Karl-Marx-Straße 13 10554"
          onChange={(e)=>{setCoord()}}
        />
        <label>Target</label>
        <input
          type="text"
          className="border border-1 border-solid border-slate-200 rounded-md !py-1 !pl-2"
          placeholder="Cologne BahnhofStraße 45B 45543"
        />
        <label>Load</label>
        <input
          type="text"
          className="border border-1 border-solid border-slate-200 rounded-md !py-1 !pl-2"
          placeholder="Furniture"
        />
        <h3 className="font-bold">Statistics</h3>
        <span className=" text-slate-600 grid grid-cols-2">
          <span>Total Distance :</span>
          <span>653,3 Km</span>
          <span>Total Consumption :</span>
          <span>54 litre</span>
          <span>Time :</span>
          <span>12H:34M</span>
          <span>Averega Speed :</span>
          <span>83,3 Km/h</span>
        </span>
        <label>Driver</label>
        <div className="flex flex-row justify-start items-center gap-x-3">
          <select className="border border-1 border-solid border-slate-400 rounded-md !py-1 !pl-2">
            <option>Joe Doe</option>
            <option>Arsen Diop</option>
          </select>
          <button className="flex font-bold text-3xl border border-solid border-slate-400 !px-3 rounded-lg hover:opacity-75 hover:border-black hover:outline-2 active:scale-95" onClick={()=>{
        
          coord.getPlan().setWaypoints( [L.latLng([0, 0]),L.latLng([37, 37])]);

          }}>
            +
          </button>
        </div>

        <div className="flex flex-row justify-start items-start">
          <label>
            <input type="radio" name="test" value="motorcycle" />
            <img
              src="icons8-motorcycle-100.png"
              alt="Option 1"
              className=" !h-24"
            />
          </label>

          <label>
            <input type="radio" name="test" value="sedan" />
            <img src="icons8-sedan-100.png" alt="Option 2" className=" !h-24" />
          </label>

          <label>
            <input type="radio" name="test" value="station" />
            <img
              src="icons8-station-wagon-100.png"
              alt="Option 2"
              className=" !h-24"
            />
          </label>
          <label>
            <input type="radio" name="test" value="truck" />
            <img
              src="icons8-truck-100.png"
              className=" !h-[100px] !w-32"
              alt="Option 2"
            />
          </label>
        </div>
      </section>
    </div>
    </MyContext.Provider>
  );
}

export default App;
