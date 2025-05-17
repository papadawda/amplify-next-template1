'use client';

import { useEffect, useState } from "react";

export default function LocationFinderClient() {
  const [locationInfo, setLocationInfo] = useState({city: 'N/A'});

  const getLocationInfo = async () => {
    
      const response = await fetch("https://ipwho.is/");
      const locationData = await response.json();
      console.log(locationData); 
      setLocationInfo(locationData);
   
  }

  useEffect(() => {
    getLocationInfo();
  })

  return (
    <>
        <h1>Hello from {locationInfo.city} - client com</h1>
    </>
  )
}
