var agreement = confirm("Чи бажаєте почати гру?");
if (agreement === false) {
  console.log("Сьогодні ви не виграли мільйон, а могли");
} else {
  var gain = 0;
  var multiplierRandomNumber = 1;
  var multiplierGain = 1;
  game:
  while (agreement) {
    if (multiplierRandomNumber === 1) {
      var randomNumber = Math.round(Math.random() * 5);
    } else {
      var randomNumber = Math.round(Math.random() * 5) * multiplierRandomNumber;
    }

    for (let i = 0; i < 3; i++) {
      var userNumber = +prompt(`Введіть число від 0 до ${5 * multiplierRandomNumber }`);
      if (i === 0 && userNumber === randomNumber) {
        gain += 10 * multiplierGain;
        console.log(`Ваш виграш - ${gain}$`);
        break;
      } else if (i === 1 && userNumber === randomNumber) {
        gain += 5 * multiplierGain;
        console.log(`Ваш виграш - ${gain}$`);
        break;
      } else if (i === 2 && userNumber === randomNumber) {
        gain += 2 * multiplierGain;
        console.log(`Ваш виграш - ${gain}$`);
        break;
      }
    }
    multiplierRandomNumber *= 3;
    multiplierGain *=2;

    if (gain === 0) {
      console.log("Ваш виграш - 0$");
      agreement = confirm("Чи хочете ви зіграти знов?");
      if (agreement === true) {
        continue game;
      } else {
        console.log(`дякуємо за спробу`);
      }
    } else {
      agreement = confirm("Чи хочете ви продовжити?");
      if (agreement === true) {
        continue game;
      } else {
        console.log(`Ви виграли ${gain}$`);
      }
    }
  }
}
