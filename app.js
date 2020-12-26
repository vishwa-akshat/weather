window.addEventListener('load',()=>{
    let long;
    let lat;
    let locationTimezone= document.querySelector('.location-timezone');
    let temperatureDegree= document.querySelector('.temperature-degree');
    let temperatureDescription = document.querySelector('.temperature-description');
    let img= document.querySelector('.img');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            lat =position.coords.latitude;
            long=position.coords.longitude;

            const units='metric';
            const apiKey = 'b6ad0562c691c0e527910bd7c8e9508b';
            const api= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${units}&appid=${apiKey}`;
            
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data);
                locationTimezone.textContent= data.name;
                temperatureDegree.textContent=data.main.temp;
                temperatureDescription.textContent=data.weather[0].description.toUpperCase();
                const imgUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                img.innerHTML=`<img src=${imgUrl} alt='icon'>`
            })
            .catch(err =>{
                console.log(err);
            })
        });
    }
});



