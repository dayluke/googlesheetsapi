var sheetID = "1-92URgyl6993TXdqh9V3Syk_8_KSHCp9Q9xUNEaeV90";
var apiKey = "AIzaSyDCTchIRKAybbqeaSV3J3koD8snuU8OHag";
var range = "A2:F13";

var url = "https://sheets.googleapis.com/v4/spreadsheets/" + sheetID + "/values/" + range + "?key=" + apiKey;

var counter = 0;
var maxCounter = 11;

function httpGet()
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, false); // false for synchronous request
  xmlHttp.send(null);
  
  var obj = JSON.parse(xmlHttp.responseText);
  var name = obj.values[counter][0];
  var picture = obj.values[counter][1];
  var time = obj.values[counter][2];
  var method = obj.values[counter][3];
  var ingred = obj.values[counter][4];
  console.log(obj);
  
  var element;
  element = document.getElementById("recipeName");
  element.innerHTML = name;
  element = document.getElementById("recipeImage");
  element.src = picture;
  element = document.getElementById("recipeTime");
  element.innerHTML = time;
  element = document.getElementById("recipeMethod");
  element.innerHTML = method;
  element = document.getElementById("recipeIngred");
  element.innerHTML = ingred;
}

function updateCounter(change)
{
  if (change == -1) { //left arrow clicked
    counter--;
    if (counter < 0)
      {
        counter = maxCounter;
      }
  } else if (change == 1) { //right arrow clicked
    counter++;
    if (counter > maxCounter)
      {
        counter = 0;
      }
  }
  httpGet();
}
