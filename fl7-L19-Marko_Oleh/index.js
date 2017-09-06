let getJSON = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url).then(function(response) {
      return response.json();
    }).then(function(returnedValue) {
      resolve(returnedValue);
    }).catch(function (err) {
      reject(err);
    })
  })
};

var getAstros = getJSON('http://api.open-notify.org/astros.json');
console.log(typeof getAstros);
getAstros
  .then(function(data) {
    console.log(data.message);
  }, function(error) {
    console.log(error);
  });


function addScript(src) {
  if (document.getElementsByClassName('jsonp')[0]) {
    document.head.removeChild(document.getElementsByClassName('jsonp')[0]);
  }
  var elem = document.createElement("script");
  elem.src = src;
  document.head.appendChild(elem);
  elem.classList.add('jsonp');
}

function parse(data) {
  let requiredData = {};
  if (data.report) {
    requiredData.temperature = (data.report.min_temp + data.report.max_temp) / 2 || "information unavaible";
    requiredData.windPower = data.report.wind_speed || "information unavaible";
    requiredData.windDirection = (data.report.wind_direction !== '--') ? data.report.wind_direction : "information unavaible";
    showWeather(requiredData);
  } else {
    let indexOfResults = (requestCount % 10 === 0) ? 9 : requestCount % 10 - 1;
    console.log(indexOfResults);
    requiredData.temperature = (data.results[indexOfResults].min_temp + data.results[indexOfResults].max_temp) / 2 || "information unavaible";
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
  windDirectionContainer.innerHTML = windDirection;
}

function startProgressBar() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 10);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
      elem.style.width = '1%'
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

addScript('http://marsweather.ingenology.com/v1/latest/?format=jsonp&callback=parse');
let requestCount = 0;
let previous = document.getElementsByClassName('previous')[0];
let next = document.getElementsByClassName('next')[0];

previous.onclick = function() {
  startProgressBar();
  requestCount++;
  let page = Math.ceil(requestCount / 10);
  addScript(`http://marsweather.ingenology.com/v1/archive/?page=${page}&format=jsonp&callback=parse`);
}

next.onclick = function() {
  if (requestCount === 0) {
    addScript('http://marsweather.ingenology.com/v1/latest/?format=jsonp&callback=parse');
  } else {
    startProgressBar();
    requestCount--;
    let page = Math.ceil(requestCount / 10);
    addScript(`http://marsweather.ingenology.com/v1/archive/?page=${page}&format=jsonp&callback=parse`);
  }
}
