const form = document.getElementById('search-form')
const temperature = document.getElementById('temperature')
const windreading = document.getElementById('wind')
const result = document.getElementById('result')
const statusText = document.querySelector("#status");
const cityNameHeading = document.querySelector("#city-name");



async function getCoordinates(city){
    
        let response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
        let coordinates = await response.json()
        if (!coordinates.results)
            return null;
        let {longitude, latitude} =  coordinates.results[0]
        return coordinates.results[0]
}


async function getWeather(longitude,latitude){
   
       
        let weather= await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`) 
        let details = await weather.json();
    //     let {temperature_2m,wind_speed_10m} = details.current
    //    console.log(temperature_2m,wind_speed_10m)
    //    result.hidden = false
    //    temperature.textContent = temperature_2m
    //    windreading.textContent = wind_speed_10m
        
        return details.current;
   
}


form.addEventListener('submit',async (event)=>{
    event.preventDefault();
    const formdata = new FormData(form);
    const city = formdata.get('city').trim();
    if(!city){
        return 
    }
    statusText.textContent = "Loading...."
    result.hidden = true;
    
    try {
        const location = await getCoordinates(city);

        if (!location) {
          statusText.textContent = "City not found";
         result.hidden = true
          return;
        }
        
    
        const weather = await getWeather(location.longitude, location.latitude);
        console.log(location)
        cityNameHeading.textContent = `${location.name}, ${location.country}`;
        temperature.textContent = weather.temperature_2m;
        windreading.textContent = weather.wind_speed_10m;
    
        statusText.textContent = "";
        result.hidden = false;
      } catch (error) {
        statusText.textContent = "Something went wrong, please try again.";
      }
    });
  





function getWeatherPromise(city) {
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`).then((response)=>{
        response.json().then((coordinates)=>{
            let {longitude, latitude} =  coordinates.results[0]
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`).then((weather)=>{
                weather.json().then((details)=>{
                    let {temperature_2m,wind_speed_10m} = details.current
                })
            })
        })
       
       
    });
}