var dollar = +prompt(`Enter number of dollars`);
var euro = +prompt(`Enter number of euro`);

var dollarExchange = 26.02;
var euroExchange = 29.7;

var str = `${euro} euros are equal ${Math.round((euro * euroExchange) * 100) / 100} UAH, ${dollar}
dollars are equal ${Math.round((dollar * dollarExchange) * 100) / 100} UAH, one euro is equal
${Math.round((euroExchange / dollarExchange) * 1000) / 1000} dollars`;

alert(str);
