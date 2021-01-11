$(document).ready(function () {
    var typed = new Typed('.typed', {
        strings: ['Hello...', 'Find Your City Weather...' ],
        smartBackspace: true, // Default value
        typeSpeed: 100,
        loop: true,
      });
    $("#search").on("keyup",function (e) {
        var cityname = e.target.value;
        const APIKEY = "debeea683feca71669fc6e6d22e4bcfb";

        $.ajax({
                url:`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKEY}&units=metric`,


        }).done(function (data) {
            console.log(data)
             $(".profile").html(`
             <div class="container">
            <div class="row">
                <div class="card " style="width: 17rem; ">
                    <div class="card-header">${cityname.toUpperCase()}</div>
                        <img class="card-img-top img-fluid mx-auto" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${data.weather[0].description}</h5>
                        <p class="card-text">The temprature at ${cityname} is = ${data.main.temp} &#8451; and it feel like it is ${data.main.feels_like}</p>
                        <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">Know more about this city</a>
                    </div>
                </div>
            </div>
            </div>
             `);
             
                  });
        
    }) 
    $("#search").on("keyup",function (f) {
        var cityname = f.target.value;
        const APIKEY = "debeea683feca71669fc6e6d22e4bcfb";

        $.ajax({
                url:`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${APIKEY}&units=metric`,


        }).done(function (fdata) {
            console.log(fdata)
            $(".hour").html(`
        <div class="container">
            <div class="row">
                <table class="table table-borderless">
                   <tr>
                        <th></th>
                         <th>5 Day forecast</th>
                         <th></th>
                   </tr>
                   <tr>
                        <td>${fdata.list[0].dt_txt}</td>
                        <td><img src="https://openweathermap.org/img/wn/${fdata.list[0].weather[0].icon}@2x.png" class="img-fluid">${fdata.list[0].main.temp}&#8451;</td>
                        <td>${fdata.list[0].weather[0].description}</td>
                   </tr>
                   <tr>
                        <td>${fdata.list[8].dt_txt}</td>
                        <td><img src="https://openweathermap.org/img/wn/${fdata.list[8].weather[0].icon}@2x.png" class="img-fluid">${fdata.list[0].main.temp}&#8451;</td>
                        <td>${fdata.list[8].weather[0].description}</td>
                   </tr>
                   <tr>
                        <td>${fdata.list[16].dt_txt}</td>
                        <td><img src="https://openweathermap.org/img/wn/${fdata.list[16].weather[0].icon}@2x.png" class="img-fluid">${fdata.list[0].main.temp}&#8451;</td>
                        <td>${fdata.list[16].weather[0].description}</td>
                   </tr>
                   <tr>
                        <td>${fdata.list[24].dt_txt}</td>
                        <td><img src="https://openweathermap.org/img/wn/${fdata.list[24].weather[0].icon}@2x.png" class="img-fluid">${fdata.list[0].main.temp}&#8451;</td>
                        <td>${fdata.list[24].weather[0].description}</td>
                   </tr>
                   <tr>
                       
                        <td>${fdata.list[32].dt_txt}</td>
                        <td><img src="https://openweathermap.org/img/wn/${fdata.list[32].weather[0].icon}@2x.png" class="img-fluid">${fdata.list[0].main.temp}&#8451;</td>
                        <td>${fdata.list[32].weather[0].description}</td>
                   </tr>
               </table>
           </div>
         </div>
             `);
             
                  });
        
    }) 
    
 
    
   
   
})