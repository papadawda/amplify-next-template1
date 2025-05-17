export default async function LocationFinderServer() {
  // Step 1: Get location info
  const response = await fetch("https://ipwho.is/");
  const locationData = await response.json();
  const locationInfo = locationData;

  const city = locationInfo?.city ?? "Unknown";
  const lat = locationInfo?.latitude;
  const lon = locationInfo?.longitude;

  // Step 2: Fetch temperature forecast from 7Timer!
  let temperature = "?";

    const weatherRes = await fetch(
      `https://www.7timer.info/bin/astro.php?lon=${lon}&lat=${lat}&ac=0&unit=metric&output=json&tzshift=0`
    );
    const weatherData = await weatherRes.json();

    if (weatherData?.dataseries && weatherData.dataseries.length > 0) {
      temperature = weatherData.dataseries[0].temp2m;
   
  }

  // Step 3: Return server-rendered content
  return (
    <>
      <h1>Hello from {locationInfo?.city} - server com</h1>
      <p> temperature: {temperature}°C</p>
    </>
  );
}
