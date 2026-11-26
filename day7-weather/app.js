const form = document.getElementById('search-form')
const temperature = document.getElementById('temperature')
const windreading = document.getElementById('wind')
const result = document.getElementById('result')


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const formdata = new FormData(form);
    const city = formdata.get('city')
    getCoordinates(city).then(({longitude,latitude})=>{
        getWeather(longitude,latitude);
    })

   


    
    
})


async function getCoordinates(city){
    try{
        let response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
        let coordinates = await response.json()
        if (!coordinates.results[0])
        return;
     
        let {longitude, latitude} =  coordinates.results[0]
       
        return {longitude,latitude}
    }
    catch(error){
        console.log('City not found')
    }

}
async function getWeather(longitude,latitude){
    try{
       
        let weather= await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`) 
        let details = await weather.json();
        let {temperature_2m,wind_speed_10m} = details.current
       console.log(temperature_2m,wind_speed_10m)
       result.hidden = false
       temperature.textContent = temperature_2m
       windreading.textContent = wind_speed_10m
        
        //return longitude,latitude;
    }
    catch(error){
        console.log('Error',error.message)
    }
}


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