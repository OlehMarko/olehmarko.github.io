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
// var myHeaders = new Headers();
//
// var myInit = { method: 'GET',
//                headers: myHeaders,
//                mode: 'cors',
//                cache: 'default' };

// fetch('http://marsweather.ingenology.com/v1/latest/?format=json').then(function(response) {
//   return response.json();
// }).then(function(returnedValue) {
//   console.log(returnedValue);;
// })
