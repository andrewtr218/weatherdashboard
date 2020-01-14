var Location = "London"

function credPrint(Location){
    $(".city").text(Location);
};

function current(Location){  
$.ajax({
    url: "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q="+Location+"&appid=36fbb44d644fb8f6ba6572a1c00e22c9",
    method: "GET"
}).then(function(data){
    console.log(data.main.temp)
    console.log(data)
    $(".tempCurrent").text(`Current Temp: ${data.main.temp} Kelvin`);
    // $(".tempCurrent").text("Current Temp: ${data.main.temp}");
    $(".humidCurrent").text("Current Humidity: " + data.main.humidity);
    $(".windCurrent").text(`Current Wind speed: ${data.wind.speed}`);

    uvIndex(data)

})
};

function uvIndex(data){
    var lat = data.coord.lat;
    var lon = data.coord.lon;
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/uvi?&appid=36fbb44d644fb8f6ba6572a1c00e22c9&lat="+lat+"&lon="+lon,
        method: "GET"
    }).then(function(data){
        console.log(data)
        $(".uvIndex").text(`UV Index: ${data.value}`);
        $(".date").text(data.date_iso);
    })
};

function five(Location){
$.ajax({
    url: "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=" + Location + "&appid=36fbb44d644fb8f6ba6572a1c00e22c9",
    method: "GET"
}).then(function(data){
    $(".dateDay1").text(`${data.list[4].dt_txt}`);
    // $(".iconDay1").attr("src", `${data.list[0].weather[0].icon}`)
    $("#tempDay1").text(`Temperature: ${data.list[4].main.temp} Kelvin`);
    $("#humidDay1").text(`Humidity: ${data.list[4].main.humidity}`)
    
    $(".dateDay2").text(`${data.list[12].dt_txt}`);
    // $(".iconDay1").attr("src", `${data.list[0].weather[0].icon}`)
    $("#tempDay2").text(`Temperature: ${data.list[12].main.temp} Kelvin`);
    $("#humidDay2").text(`Humidity: ${data.list[12].main.humidity}`)
    
    $(".dateDay3").text(`${data.list[20].dt_txt}`);
    // $(".iconDay1").attr("src", `${data.list[0].weather[0].icon}`)
    $("#tempDay3").text(`Temperature: ${data.list[20].main.temp} Kelvin`);
    $("#humidDay3").text(`Humidity: ${data.list[20].main.humidity}`)

    $(".dateDay4").text(`${data.list[28].dt_txt}`);
    // $(".iconDay1").attr("src", `${data.list[0].weather[0].icon}`)
    $("#tempDay4").text(`Temperature: ${data.list[28].main.temp} Kelvin`);
    $("#humidDay4").text(`Humidity: ${data.list[28].main.humidity}`)

    $(".dateDay5").text(`${data.list[36].dt_txt}`);
    // $(".iconDay1").attr("src", `${data.list[0].weather[0].icon}`)
    $("#tempDay5").text(`Temperature: ${data.list[36].main.temp} Kelvin`);
    $("#humidDay5").text(`Humidity: ${data.list[36].main.humidity}`)
})
};

    
credPrint(Location);
current(Location);
five(Location);