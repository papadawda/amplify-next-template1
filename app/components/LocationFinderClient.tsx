'use client';

import { useEffect, useState } from "react";

export default function LocationFinderClient() {
  const [data, setData] = useState({
    city: 'Loading...',
    tempC: '?'
  });

  useEffect(() => {
    const getLocationAndWeather = async () => {
      try {
        // Step 1: Get city + lat/lon
        const locRes = await fetch("https://ipwho.is/");
        const loc = await locRes.json();

        const city = loc.city ?? "Unknown";
        const lat = loc.latitude;
        const lon = loc.longitude;

        // Step 2: Get weather from 7Timer!
        const weatherRes = await fetch(
          `https://www.7timer.info/bin/astro.php?lon=${lon}&lat=${lat}&ac=0&unit=metric&output=json&tzshift=0`
        );
        const weather = await weatherRes.json();

        const tempC =
          weather?.dataseries && weather.dataseries.length > 0
            ? weather.dataseries[0].temp2m
            : '?';

        // Step 3: Update state
        setData({
          city,
          tempC
        });
      } catch (err) {
        console.error("Client weather error:", err);
      }
    };

    getLocationAndWeather();
  }, []);

  return (
    <>
      <h1>Hello from {data.city} - client com</h1>
      <p>temperature: {data.tempC}°C</p>
    </>
  );
}
