import title1 from "../../../../../../public/imgtrainee/stages/title-1.svg";
import title2 from "../../../../../../public/imgtrainee/stages/title-2.svg";
import title3 from "../../../../../../public/imgtrainee/stages/title-3.svg";
import title4 from "../../../../../../public/imgtrainee/stages/title-4.svg";
// import bg1 from "../../../../../../public/imgtrainee/stages/num1.svg";
// import bg2 from "../../../../../../public/imgtrainee/stages/num2.svg";
// import bg3 from "../../../../../../public/imgtrainee/stages/num3.svg";
// import bg4 from "../../../../../../public/imgtrainee/stages/num4.svg";
import styles from "../Stages.module.css"; // Путь к вашему файлу стилей

// console.log("BG-arr", bg1);

export const stages = [
  {
    title: "Заповнення анкети",
    img: title1,
    bg: styles.bg1,
    text1:
      "Заповнити анкету на сайті, натиснувши кнопку Приєднатись до спільноти",
    text2: "Прийняти запрошення на вступ до серверу в Discord",
    text3:
      "Додати до свого ніку спеціалізацію, щоб команда могла ідентифікувати вашу роль",
  },
  {
    title: "Прийміть запрошення",
    img: title2,
    bg: styles.bg2,
    text1:
      "Прийняти запрошення до серверу Baza Trainee Ukraine, яке надійде після заповнення анкети протягом 48 годин",
    text2:
      "Слідкувати щотижня за об`явами про старт проєктів в каналі Загальний ",
    text3:
      "Прийняти запрошення до серверу обраного проєкту і знайомитись із своєю новою командою",
  },
  {
    title: "Пройдіть онбордінг",
    img: title3,
    bg: styles.bg3,
    text1:
      "Пройти відео-онбординг про правила участі і роботи в ПЗ для керування проєктами",
    text2: " Підтвердіть згоду на участь в проєкті та NDA",
    text3:
      "Прийняти запрошення до серверу обраного проєкту і знайомитись із своєю новою командою",
  },
  {
    title: "Комунікація з командою",
    img: title4,
    bg: styles.bg4,
    text1:
      "Заповнити анкету на сайті, натиснувши кнопку Приєднатись до спільноти",
    text2: "Прийняти запрошення на вступ до серверу в Discord",
    text3:
      "Додати до свого ніку спеціалізацію, щоб команда могла ідентифікувати вашу роль",
  },
];
