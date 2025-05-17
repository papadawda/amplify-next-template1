'use client';

import { useEffect, useState } from "react";

export default function LocationFinderServer() {
  const [locationInfo, setLocationInfo] = useState({city: 'N/A'});

  useEffect(() => {
    const getLocationInfo = async () => {
  
        const response = await fetch("https://ipwho.is/");
        const locationData = await response.json();
        console.log("Client location:", locationData);
        setLocationInfo(locationData);  
    }

    getLocationInfo();
  })

  return (
    <>
      <h1>Hello from {locationInfo.city}  client com</h1>
    </>
  );
}
