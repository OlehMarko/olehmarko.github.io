class User {
  constructor() {
    this.lastVisitDate = new Date(2017, 7, Math.round(Math.random() * 30));
    this.globalDiscount = Math.floor(Math.random() * 100);
    this.nightDiscount = Math.floor(Math.random() * 30);
    this.weekendDiscount = Math.floor(Math.random() * 30);
    this.ordersCount = Math.floor(Math.random() * 10);
    this.ordersTotalPrice = Math.floor(Math.random() * 1000);
    this.bonus = Math.floor(Math.random() * 10);
  }
}

function getDiscount(user) {
  let now = new Date();
  let day = now.getDay();
  let hour = now.getHours();
  let bonus = user.globalDiscount;
  if (day > 4) {
    bonus += user.weekendDiscount;
  }
  if (hour > 22 || hour < 6) {
    bonus += user.nightDiscount;
  }
  return bonus;
}

function getBonus(user) {
  let now = new Date();
  let difference = (now - user.lastVisitDate) / (3600 * 1000);
  let totalBonus = 0;
  console.log(difference);
  if (difference < 240) {
    user.bonus += 240 - Math.round(difference) + user.ordersCount;
  }
  return user.bonus;
}


let user = new User();
console.log(user);
console.log(getDiscount(user));
console.log(getBonus(user));
