var Location = "London"

function current(Location){  
$.ajax({
    url: "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q="+Location+"&appid=36fbb44d644fb8f6ba6572a1c00e22c9",
    method: "GET"
}).then(function(data){
    console.log(data)
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
    })
};

function five(Location){
$.ajax({
    url: "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=" + Location + "&appid=36fbb44d644fb8f6ba6572a1c00e22c9",
    method: "GET"
}).then(function(data){
    console.log(data)
})
};

    

current(Location);
five(Location);