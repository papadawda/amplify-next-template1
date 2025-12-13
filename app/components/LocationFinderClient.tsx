'use client';
import { useEffect, useState } from "react"

export default function LocationFinderClient() {
    const [locationInfo, setLocationInfo] = useState({City: 'N/A'})
    const [tempC, setTempC] = useState('?');

    const getLocationInfo = async () => {
        const response = await fetch('https://apip.cc/json');
        const locationData = await response.json();
        console.log(locationData, "testing");
        setLocationInfo(locationData);

        const url =
      "https://www.7timer.info/bin/astro.php?lon=" +
      locationData.Longitude +
      "&lat=" +
      locationData.Latitude +
      "&ac=0&unit=metric&output=json&tzshift=0";

    const weatherRes = await fetch(url);
    const weatherData = await weatherRes.json();

    setTempC(weatherData.dataseries[0].temp2m);
    }


    
    useEffect(() => {
        getLocationInfo();
    },[])

    return (
        <>
            <h1>Hello from {locationInfo.City} - client component</h1>
            <p>Current temperature: {tempC}°C</p>
        </>
    )
}