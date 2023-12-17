/* eslint-disable react-hooks/rules-of-hooks */
import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { MyContext } from "./MyContext";
import { useContext } from "react";
import  "./Control.Geocoder"
const createRoutineMachineLayer = ({probs}) => {
 
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(33.52001088075479, 36.26829385757446),
      L.latLng(33.50546582848033, 36.29547681726967)
    ],
    
	geocoder: L.Control.Geocoder.nominatim(),
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false
  }).on('waypointschanged', function (e) {
   
    probs(instance)
   /*  L.routing.control.setWaypoints([
      L.latLng(33.52001088075479, lon1),
      L.latLng(lat2, lon2)
    ]); */
    
    
    
});;

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
