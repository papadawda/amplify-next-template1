'use client';

import { useEffect, useState } from "react";

export default function LocationFinderClient() {
  const [locationInfo, setLocationInfo] = useState<{ city?: string }>({});

  useEffect(() => {
    const getLocationInfo = async () => {
      try {
        const response = await fetch("https://ipwho.is/");
        const locationData = await response.json();
        console.log("Client location:", locationData);
        setLocationInfo(locationData);
      } catch (err) {
        console.error("Failed to get location info", err);
      }
    };

    getLocationInfo();
  }, []); // ✅ prevents infinite re-renders

  return (
    <>
      <h1>Hello from {locationInfo?.city} – client com</h1>
    </>
  );
}
