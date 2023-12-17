/* eslint-disable no-unused-vars */
import { MapContainer, TileLayer,  Marker ,Popup } from 'react-leaflet'
import { useMemo, useRef, useState } from 'react';
import RoutineMachine from "../../RoutineMachine";
const center = {
  lat: 51.505,
  lng: -0.09,
}

function MapComponent({setCoord}) {
  

  return (
   <>
   <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  <RoutineMachine probs={setCoord} />
</MapContainer>
   </>
  );
}

export default MapComponent;
