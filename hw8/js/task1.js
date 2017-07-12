var a = +prompt("Enter a");
var b = +prompt("Enter b");
var c = +prompt("Enter c");

var discriminant = b*b - 4*a*c;

var res1 = (discriminant >= 0) ? (-b + Math.sqrt(discriminant)) / (2 * a) : `розв'язку немає`;
var res2 = (discriminant >= 0) ? (-b - Math.sqrt(discriminant)) / (2 * a) : `розв'язку немає`;

console.log(`Рівняння ax2+ bx + c = 0 має 2 розв’язки: x1 = ${res1}, x2 = ${res2}`);
