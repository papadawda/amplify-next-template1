'use client';

import { useEffect, useState } from "react";

export default function LocationFinderServer() {
  const [locationInfo, setLocationInfo] = useState({ city: 'N/A', tempC: '?' });

  const getLocationInfo = async () => {
    try {
      // city and coordinates
      const response = await fetch("https://ipwho.is/");
      const locationData = await response.json();
      const city = locationData.city ?? 'N/A';
      const lat = locationData.latitude;
      const lon = locationData.longitude;

      // get weather using 7Timer!
      const weatherRes = await fetch(
        `https://www.7timer.info/bin/astro.php?lon=${lon}&lat=${lat}&ac=0&unit=metric&output=json&tzshift=0`
      );
      const weatherData = await weatherRes.json();
      const tempC = weatherData?.dataseries?.[0]?.temp2m ?? '?';

      // set location and weather info
      setLocationInfo({ city, tempC });
    } catch (err) {
      console.error("Error fetching location or weather:", err);
    }
  };

  useEffect(() => {
    getLocationInfo();
  }, []);

  return (
    <>
      <h1>Hello from {locationInfo.city} - client com</h1>
      <p> temperature: {locationInfo.tempC}°C</p>
    </>
  );
}
