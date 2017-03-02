function setup() {
  createCanvas(windowWidth, windowHeight);
    background(0);
    
textSize(32);
fill(0, 102, 153);
text("UK Seaside Weather", 90, 30);
fill(0, 102, 153, 51);

    
 
  button1 = createButton('Seaford');
  button1.position(5, 50);
 
  button1.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22seaford%20uk%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });

 
  button2 = createButton('Brighton');
  button2.position(5, 90);
 
  button2.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Brighton%20uk'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
 
  button3 = createButton('Dover');
  button3.position(5, 120);
  
  button3.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Dover%20uk'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
 
  button4 = createButton('Swansea');
  button4.position(5, 160);
  
  button4.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Swansea%20uk'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  
  button5 = createButton('Bournemouth');
  button5.position(5,200); //Load Data when Button 5 is Pressed
  button5.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Bournemouth%20uk'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
}


function weatherLoaded(data) {
  var temp = data.query.results.channel.item.condition.temp;
  var windSpeed = data.query.results.channel.wind.speed;
  var windDirection = data.query.results.channel.wind.direction;
 
  var tempD2H = data.query.results.channel.item.forecast[0].high;
  var tempD2L = data.query.results.channel.item.forecast[0].low;


 


print(tempD2H);
print(tempD2L);



  background(0);

 textSize(32);
fill(0, 102, 153);
text("UK Seaside Weather", 90, 30);
fill(0, 102, 153, 51);

  textSize(15);
  textFont("Helvetica");

     
    fill(255)
    text(windSpeed, 30, windowHeight - 50);
    fill(255,0,0);
    text(temp, 30, windowHeight - 30);
    fill(0,0,255);
    text(windDirection, 30, windowHeight - 10);
   

  
  fill(255);
  noStroke();
  ellipse(windowWidth / 2, windowHeight / 2, windSpeed * 10, windSpeed * 10);
  
  
  noFill();
  strokeWeight(4);
  stroke(255,0,0);
  ellipse(windowWidth / 4, windowHeight / 2, temp * 2, temp * 2);
  
  
 
  translate(windowWidth / 2, windowHeight / 2);
  fill(0,0,255);
  noStroke();
  angleMode(DEGREES);
  rotate(windDirection);
  rect(0, 0, 150, 5);
  



}