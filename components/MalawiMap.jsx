"use client"

import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import Districts from './Districts';

const MalawiMap = () => {
  const [districts, setDistricts] = useState(null);

  useEffect(() => {
    fetch("/data/mw.geojson")
    .then((res) => res.json())
    .then((data) => setDistricts(data));
  },[]);

  return (
    <div className='w-full h-screen'>
      <MapContainer
        center={[-13.2543, 34.3015]}
        zoom={7}
        scrollWheelZoom={true}
        style={{height:"100%", width:"100%"}}
      > 
        {/* base Map */}
        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Districts Layer */}
        {districts && <Districts data={districts} />}
      </MapContainer>
    </div>
  )
}

export default MalawiMap