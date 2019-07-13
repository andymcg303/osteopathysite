var oReq = new XMLHttpRequest();

oReq.addEventListener("load", function(){
    if (oReq.status === 200){
        var responseObject = JSON.parse(oReq.responseText);
        // console.log(responseObject.weather[0].icon);	
		var wDescription = (responseObject.weather[0].description);
        // console.log(responseObject.main.temp);
        var wTemp = parseInt(Number(responseObject.main.temp) - 273.15);
        var wWindSpeed = (responseObject.wind.speed);
        // console.log(responseObject.clouds.all);
        var wString = "The weather is forecast to be " + wDescription + ", the temperature is " + wTemp + " degrees celsius and the windspeed is " + wWindSpeed + "kph";

        var weather = document.querySelector("#weather");
        weather.textContent = wString;
    }
});
  
oReq.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Enfield,uk&APPID=a2f590296ef709ae67a363c31331ea1f");
oReq.send();
