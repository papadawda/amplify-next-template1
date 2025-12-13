
export default async function LocationFinderServer() {
  
        const response = await fetch('https://apip.cc/json');
        const locationData = await response.json();
        console.log(locationData);
        const locationInfo = locationData
   

        const url = "https://www.7timer.info/bin/astro.php?lon="
            + locationData.Longitude
            + "&lat="
            + locationData.Latitude
            + "&ac=0&unit=metric&output=json&tzshift=0";
            const weatherRes = await fetch(url);
            const weatherData = await weatherRes.json();

            const tempC = weatherData.dataseries[0].temp2m;

    return (
        <>
            <h1>Hello from {locationInfo.City} - server component</h1>
            <p>Current temperature: {tempC}°C</p>
        </>
    )
}