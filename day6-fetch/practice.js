async function getWeather(){
    try{
    const dubai = await fetch("https://api.open-meteo.com/v1/forecast?latitude=25.2&longitude=55.27&current=temperature_2m")
    const cairo = await fetch("https://api.open-meteo.com/v1/forecast?latitude=30.04&longitude=31.24&current=temperature_2m")
    const dubaiData = await dubai.json();
    const cairoData = await cairo.json();
    console.log(dubaiData.current.temperature_2m)
    console.log(cairoData.current.temperature_2m)

    }
    catch(error){
        console.log("failed - ",error.message)
    }
}

getWeather();


async function getUsers(){
    try{
        const userData = await fetch("https://jsonplaceholder.typicode.com/users")
        let users = await userData.json();
        console.log(Object.keys(users).length)
        const names = users.map((user)=>user.name)
        console.log(names)

        const filter = users.filter((user)=>user.email.endsWith(".biz"))
        console.log(filter.map((user)=>user.name))

        users.forEach(user => {
          console.log(`${user.name} lives in ${user.address.city}`)

        });
    }
    catch(error){
        console.log(error.message)
    }
}

getUsers();