(function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();

let getJSON = (url) => {
  return new Promise ((resolve, reject) => {
    fetch('http://api.open-notify.org/astros.json').then(function(response) {
      return response.json();
    }).then(function(returnedValue) {
      resolve(returnedValue);
    })
  })
};

var getAstros = getJSON('http://api.open-notify.org/astros.json');
console.log(typeof getAstros);
getAstros
  .then(function(data) {
	console.log(data.message);
  }, function(error) {
	console.log(err);
  });
let script = document.createElement("script");
script.setAttribute("src", 'http://marsweather.ingenology.com/v1/latest/?format=jsonp&callback=parse');
document.getElementsByTagName('head')[0].appendChild(script);

function parse(data) {
   console.log(data);
}
function addScript(src) {
  if (document.getElementsByClassName('jsonp')[0]) {
    document.head.removeChild(document.getElementsByClassName('jsonp')[0]);
  }
  var elem = document.createElement("script");
  elem.src = src;
  document.head.appendChild(elem);
  elem.classList.add('jsonp');
}

addScript('http://marsweather.ingenology.com/v1/latest/?format=jsonp&callback=parse');
let requestCount = 0;
function parse(data) {

  let requiredData = {};
  if (data.report) {
    requiredData.temperature = (data.report.min_temp + data.report.max_temp) / 2;
    requiredData.windPower = data.report.wind_speed || "information unavaible";
    requiredData.windDirection = (data.report.wind_direction !== '--') ? data.report.wind_direction : "information unavaible";
    showWeather(requiredData);
  } else {
    let indexOfResults = (requestCount % 10 === 0) ? 9 : requestCount % 10 - 1;
    console.log(indexOfResults);
    requiredData.temperature = (data.results[indexOfResults].min_temp + data.results[indexOfResults].max_temp) / 2;
    requiredData.windPower = data.results[indexOfResults].wind_speed || "information unavaible";
    requiredData.windDirection = (data.results[indexOfResults].wind_direction !== '--') ? data.results[indexOfResults].wind_direction : "information unavaible";
    console.log(requiredData);
    showWeather(requiredData);
  }
}

function showWeather(data) {
  let container = document.getElementsByClassName('container')[0];

  let temperatureContainer = document.getElementsByClassName('temperature')[0];
  let temperature = `Temperature: ${data.temperature}`;
  temperatureContainer.innerHTML = temperature;

  let windPowerContainer = document.getElementsByClassName('power')[0];
  let windPower = `Wind power: ${data.windPower}`;
  windPowerContainer.innerHTML = windPower;

  let windDirectionContainer = document.getElementsByClassName('direction')[0];
  let windDirection = `Wind direction: ${data.windDirection}`;
  windDirectionContainer.innerHTML= windDirection;

}

let previous = document.getElementsByClassName('previous')[0];
let next = document.getElementsByClassName('next')[0];

previous.onclick = function () {
    requestCount++;
    console.log(requestCount);
    let page = Math.ceil(requestCount / 10);
    addScript(`http://marsweather.ingenology.com/v1/archive/?page=${page}&format=jsonp&callback=parse`);
}

next.onclick = function () {
  if (requestCount === 0) {
    addScript('http://marsweather.ingenology.com/v1/latest/?format=jsonp&callback=parse');
  } else {
    requestCount--;
    let page = Math.ceil(requestCount / 10);
    addScript(`http://marsweather.ingenology.com/v1/archive/?page=${page}&format=jsonp&callback=parse`);
  }
}
