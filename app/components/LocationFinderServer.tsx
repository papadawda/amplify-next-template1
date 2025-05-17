export default async function LocationFinderServer() {

    const response = await fetch("https://ipwho.is/");
    const locationData = await response.json();
    console.log(locationData); 
    const locationInfo = locationData;

  return (
    <>
        <h1>Hello from {locationInfo?.city} - server com</h1>
    </>
  )
}
