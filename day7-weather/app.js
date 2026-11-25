const form = document.getElementById('search-form')
const temperature = document.getElementById('temperature')
const windreading = document.getElementById('wind')
const result = document.getElementById('result')


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const formdata = new FormData(form);
    const city = formdata.get('city')
   let {temp,wind} =  getWeather(city);

    console.log(temp,wind)
    
    
})

async function getWeather(city){
    try{
        let response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
        let coordinates = await response.json()
        let {longitude, latitude} =  coordinates.results[0]
        let weather= await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`) 
        let details = await weather.json();
        let {temperature_2m,wind_speed_10m} = details.current
     
       result.hidden = false
       temperature.textContent = temperature_2m
       windreading.textContent = wind_speed_10m
        
        //return longitude,latitude;
    }
    catch(error){
        console.log('city not found',error.message)
    }
}


