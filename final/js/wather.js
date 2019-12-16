function vypis(udaje){
    console.log(udaje);
  }

  $.getJSON( "http://api.openweathermap.org/data/2.5/weather",
           {lat:48.7172,lon:21.2497,units:"metric",APPID:"8641355d0bdfa52a49f4e9a42560adf0"},
           vypis);
