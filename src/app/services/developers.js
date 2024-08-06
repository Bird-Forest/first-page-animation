"use server";

import { Developer } from "../models/developer";

export const createDeveloper = async (values) => {
  try {
    const newDev = await Developer.create(values);
    return {
      message: "Успішно додано",
    };
  } catch (e) {
    console.log("User", e);
    return {
      message: "Відбулася помилка",
    };
  }
};

export const getDevelopers = async (req, res) => {
  try {
    const devs = await Developer.find().lean();

    const data = JSON.parse(JSON.stringify(devs));
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getDeveloperById = async (req, res) => {
  const { id } = req;
  try {
    const dev = await Developer.findById(id).lean();

    const data = JSON.parse(JSON.stringify(dev));
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getDevelopersForTeam = async (specDev, lastName) => {
  try {
    const dev = await Developer.find({
      speciality: specDev,
      last: { $regex: lastName, $options: "i" },
    }).lean();

    const data = JSON.parse(JSON.stringify(dev));

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateDeveloper = async (item, id) => {
  try {
    const developer = await Developer.findByIdAndUpdate({ _id: id }, item, {
      new: true,
    }).lean();
    // const data = JSON.parse(JSON.stringify(developer));
    return {
      message: "Успішно оновленно",
    };
  } catch (e) {
    console.log(e);
    return {
      message: "Відбулася помилка",
    };
  }
};

export const getDevelopersBySpeciality = async (special) => {
  try {
    const filteredDevelopers = await Developer.find({
      speciality: special,
    });
    const data = JSON.parse(JSON.stringify(filteredDevelopers));
    return data;
  } catch (e) {
    console.log("Error fetching developers:", e);
    throw error;
  }
};

export const getDevelopersByLastName = async (lastName) => {
  try {
    const filteredDevelopers = await Developer.find({
      last: { $regex: lastName, $options: "i" },
    });
    const data = JSON.parse(JSON.stringify(filteredDevelopers));
    return data;
  } catch (e) {
    console.log("Error fetching developers:", e);
    throw error;
  }
};

export const deleteDeveloper = async (id) => {
  try {
    const develper = await Developer.findOneAndDelete({ _id: id });
    // const data = JSON.parse(JSON.stringify(develper));
    return {
      message: "Успішно видалено",
    };
  } catch (e) {
    console.log(e);
    return {
      message: "Сталась помилка",
    };
  }
};

// export const createDeveloperCollection = async () => {
//   try {
//     const docs = await Developer.insertMany([
//       {
//         first: "Іван",
//         last: "Спокійний",
//         email: "ivan@gmail.com",
//         city: "Одеса",
//         country: "Україна",
//         nick: "ivan12345",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         resource: "сайт Baza Trainee Ukraine",
//         rule: true,
//         agree: true,
//         speciality: "Frontend",
//         projects: [],
//       },
//       {
//         first: "Настя",
//         last: "Кмітлива",
//         email: "nasty@gmail.com",
//         city: "Київ",
//         country: "Україна",
//         nick: "nasty1478",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         resource: "сторінка Baza Educat в Instagram",
//         rule: true,
//         agree: true,
//         speciality: "Frontend",
//         projects: [],
//       },
//       {
//         first: "Андрій",
//         last: "Роботящий",
//         email: "andry@gmail.com",
//         city: "Ровно",
//         country: "Україна",
//         nick: "andriy2589",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         resource: "сторінка Baza Educat в Facebook",
//         rule: true,
//         agree: true,
//         speciality: "Frontend",
//         projects: [],
//       },
//       {
//         first: "Олена",
//         last: "Розумна",
//         email: "olena@gmail.com",
//         city: "Варшава",
//         country: "Польща",
//         nick: "olena2648",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         resource: "сайт Baza Trainee Ukraine",
//         rule: true,
//         agree: true,
//         speciality: "Frontend",
//         projects: [],
//       },
//       {
//         first: "Олександр",
//         last: "Веселий",
//         email: "alex@gmail.com",
//         city: "Харків",
//         country: "Україна",
//         nick: "alex5465",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         resource: "сторінка Baza Educat в Facebook",
//         rule: true,
//         agree: true,
//         speciality: "Backend",
//         projects: [],
//       },
//       {
//         first: "Василь",
//         last: "Розважливий",
//         email: "vasy@gmail.com",
//         city: "Вінниця",
//         country: "Україна",
//         nick: "vasy4568",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         resource: "пост на LinkedIn",
//         rule: true,
//         agree: true,
//         speciality: "Backend",
//         projects: [],
//       },
//       {
//         first: "Ольга",
//         last: "Уважна",
//         email: "olga@gmail.com",
//         city: "Париж",
//         country: "Франція",
//         nick: "olga8965",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         resource: "сторінка Baza Educat в Facebook",
//         rule: true,
//         agree: true,
//         speciality: "QA Manual",
//         projects: [],
//       },
//       {
//         first: "Оксана",
//         last: "Працелюбна",
//         email: "oxana@gmail.com",
//         city: "Вєна",
//         country: "Австрія",
//         nick: "oxana4587",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         resource: "сторінка Baza Educat в Facebook",
//         rule: true,
//         agree: true,
//         speciality: "QA Manual",
//         projects: [],
//       },
//       {
//         first: "Максим",
//         last: "Непоседючий",
//         email: "max@gmail.com",
//         city: "Дніпро",
//         country: "Україна",
//         nick: "max5864",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         resource: "сторінка Baza Educat в Facebook",
//         rule: true,
//         agree: true,
//         speciality: "Full Stack",
//         projects: [],
//       },
//       {
//         first: "Остап",
//         last: "Зорепад",
//         email: "ostap@gmail.com",
//         city: "Полтава",
//         country: "Україна",
//         nick: "ostap5489",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         resource: "сторінка Baza Educat в Instagram",
//         rule: true,
//         agree: true,
//         speciality: "Full Stack",
//         projects: [],
//       },
//       {
//         first: "Сергій",
//         last: "Кпуглий",
//         email: "serg@gmail.com",
//         city: "Львів",
//         country: "Україна",
//         nick: "serg5487",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         resource: "пост на LinkedIn",
//         rule: true,
//         agree: true,
//         speciality: "Full Stack",
//         projects: [],
//       },
//       {
//         first: "Віктор",
//         last: "Непитущий",
//         email: "victor@gmail.com",
//         city: "Тернопіль",
//         country: "УКраїна",
//         nick: "victor5698",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         resource: "сайт Baza Trainee Ukraine",
//         rule: true,
//         agree: true,
//         speciality: "Full Stack",
//         projects: [],
//       },
//       {
//         first: "Ілля",
//         last: "Зоря",
//         email: "illy@gmail.com",
//         city: "Миколаїв",
//         country: "Україна",
//         nick: "illy6589",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         resource: "канал Baza Go в Telegram",
//         rule: true,
//         agree: true,
//         speciality: "Project Manager",
//         projects: [],
//       },
//       {
//         first: "Аліна",
//         last: "Творча",
//         email: "alina@gmail.com",
//         city: "Софія",
//         country: "Болгарія",
//         nick: "alina5687",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         resource: "сторінка Baza Educat в Facebook",
//         rule: true,
//         agree: true,
//         speciality: "UI/UX designer",
//         projects: [],
//       },
//       {
//         first: "Ірина",
//         last: "Пташка",
//         email: "iryna@gmail.com",
//         city: "Житомир",
//         country: "Україна",
//         nick: "irina5647",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         resource: "сайт Baza Trainee Ukraine",
//         rule: true,
//         agree: true,
//         speciality: "Full Stack",
//         projects: [],
//       },
//       {
//         first: "Марія",
//         last: "Калинка",
//         email: "mary@gmail.com",
//         city: "Лондон",
//         country: "Англія",
//         nick: "mary2589",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         resource: "сторінка Baza Educat в Instagram",
//         rule: true,
//         agree: true,
//         speciality: "UI/UX designer",
//         projects: [],
//       },
//       {
//         first: "Богдан",
//         last: "Нескорений",
//         email: "bogdan@gmail.com",
//         city: "Київ",
//         country: "Україна",
//         nick: "bogdan56987",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         resource: "сторінка Baza Educat в Facebook",
//         rule: true,
//         agree: true,
//         speciality: "Backend",
//         projects: [],
//       },
//     ]);
//   } catch (e) {
//     console.log("ERROR POSTS", e);
//   }
// };

// export const createDeveloperCollection = async () => {
//   try {
//     const docs = await Developer.insertMany([
//       {
//         first: "Іван",
//         last: "Спокійний",
//         email: "ivan@gmail.com",
//         city: "Одеса",
//         country: "Україна",
//         nick: "ivan12345",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         course: "03.03.2024",
//         experience: "Ні",
//         motivation: "досвід",
//         resource: "сайт Baza Trainee Ukraine",
//         rule: true,
//         agree: true,
//         speciality: "Frontend",
//       },
//       {
//         first: "Настя",
//         last: "Кмітлива",
//         email: "nasty@gmail.com",
//         city: "Київ",
//         country: "Україна",
//         nick: "nasty1478",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         course: "2023",
//         experience: "Так",
//         motivation: "досвід",
//         resource: "сторінка Baza Educat в Instagram",
//         rule: true,
//         agree: true,
//         speciality: "Frontend",
//       },
//       {
//         first: "Андрій",
//         last: "Роботящий",
//         email: "andry@gmail.com",
//         city: "Ровно",
//         country: "Україна",
//         nick: "andriy2589",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         course: "10.2023",
//         experience: "Ні",
//         motivation: "досвід",
//         resource: "сторінка Baza Educat в Facebook",
//         rule: true,
//         agree: true,
//         speciality: "Frontend",
//       },
//       {
//         first: "Олена",
//         last: "Розумна",
//         email: "olena@gmail.com",
//         city: "Варшава",
//         country: "Польща",
//         nick: "olena2648",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         course: "01.2024",
//         experience: "Ні",
//         motivation: "досвід",
//         resource: "сайт Baza Trainee Ukraine",
//         rule: true,
//         agree: true,
//         speciality: "Frontend",
//       },
//       {
//         first: "Олександр",
//         last: "Веселий",
//         email: "alex@gmail.com",
//         city: "Харків",
//         country: "Україна",
//         nick: "alex5465",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         course: "10.2023",
//         experience: "Ні",
//         motivation: "досвід",
//         resource: "сторінка Baza Educat в Facebook",
//         rule: true,
//         agree: true,
//         speciality: "Backend",
//       },
//       {
//         first: "Василь",
//         last: "Розважливий",
//         email: "vasy@gmail.com",
//         city: "Вінниця",
//         country: "Україна",
//         nick: "vasy4568",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         course: "02.2024",
//         experience: "Ні",
//         motivation: "досвід",
//         resource: "пост на LinkedIn",
//         rule: true,
//         agree: true,
//         speciality: "Backend",
//       },
//       {
//         first: "Ольга",
//         last: "Уважна",
//         email: "olga@gmail.com",
//         city: "Париж",
//         country: "Франція",
//         nick: "olga8965",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         course: "25.08.2023",
//         experience: "Так",
//         motivation: "досвід",
//         resource: "сторінка Baza Educat в Facebook",
//         rule: true,
//         agree: true,
//         speciality: "QA Manual engineer",
//       },
//       {
//         first: "Оксана",
//         last: "Працелюбна",
//         email: "oxana@gmail.com",
//         city: "Вєна",
//         country: "Австрія",
//         nick: "oxana4587",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         course: "01.2024",
//         experience: "Ні",
//         motivation: "досвід",
//         resource: "сторінка Baza Educat в Facebook",
//         rule: true,
//         agree: true,
//         speciality: "QA Manual engineer",
//       },
//       {
//         first: "Максим",
//         last: "Непоседючий",
//         email: "max@gmail.com",
//         city: "Дніпро",
//         country: "Україна",
//         nick: "max5864",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         course: "06.2023",
//         experience: "Так",
//         motivation: "досвід",
//         resource: "сторінка Baza Educat в Facebook",
//         rule: true,
//         agree: true,
//         speciality: "Fullstack engineer",
//       },
//       {
//         first: "Остап",
//         last: "Зорепад",
//         email: "ostap@gmail.com",
//         city: "Полтава",
//         country: "Україна",
//         nick: "ostap5489",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         course: "06.2024",
//         experience: "Ні",
//         motivation: "досвід",
//         resource: "сторінка Baza Educat в Instagram",
//         rule: true,
//         agree: true,
//         speciality: "Fullstack engineer",
//       },
//       {
//         first: "Сергій",
//         last: "Кпуглий",
//         email: "serg@gmail.com",
//         city: "Львів",
//         country: "Україна",
//         nick: "serg5487",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         course: "05.2023",
//         experience: "Так",
//         motivation: "досвід",
//         resource: "пост на LinkedIn",
//         rule: true,
//         agree: true,
//         speciality: "Fullstack engineer",
//       },
//       {
//         first: "Віктор",
//         last: "Непитущий",
//         email: "victor@gmail.com",
//         city: "Тернопіль",
//         country: "УКраїна",
//         nick: "victor5698",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         course: "03.2023",
//         experience: "Так",
//         motivation: "досвід",
//         resource: "сайт Baza Trainee Ukraine",
//         rule: true,
//         agree: true,
//         speciality: "Fullstack engineer",
//       },
//       {
//         first: "Ілля",
//         last: "Зоря",
//         email: "illy@gmail.com",
//         city: "Миколаїв",
//         country: "Україна",
//         nick: "illy6589",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         course: "05.2023",
//         experience: "Так",
//         motivation: "досвід",
//         resource: "канал Baza Go в Telegram",
//         rule: true,
//         agree: true,
//         speciality: "Project Manager",
//       },
//       {
//         first: "Аліна",
//         last: "Творча",
//         email: "alina@gmail.com",
//         city: "Софія",
//         country: "Болгарія",
//         nick: "alina5687",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         course: "01.2023",
//         experience: "Так",
//         motivation: "досвід",
//         resource: "сторінка Baza Educat в Facebook",
//         rule: true,
//         agree: true,
//         speciality: "UI/UX designer",
//       },
//       {
//         first: "Ірина",
//         last: "Пташка",
//         email: "iryna@gmail.com",
//         city: "Житомир",
//         country: "Україна",
//         nick: "irina5647",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         course: "03.2024",
//         experience: "Ні",
//         motivation: "досвід",
//         resource: "сайт Baza Trainee Ukraine",
//         rule: true,
//         agree: true,
//         speciality: "Fullstack engineer",
//       },
//       {
//         first: "Марія",
//         last: "Калинка",
//         email: "mary@gmail.com",
//         city: "Лондон",
//         country: "Англія",
//         nick: "mary2589",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         course: "12.2023",
//         experience: "Так",
//         motivation: "досвід",
//         resource: "сторінка Baza Educat в Instagram",
//         rule: true,
//         agree: true,
//         speciality: "UI/UX designer",
//       },
//       {
//         first: "Богдан",
//         last: "Нескорений",
//         email: "bogdan@gmail.com",
//         city: "Київ",
//         country: "Україна",
//         nick: "bogdan56987",
//         link: "https://www.linkedin.com/company/baza-trainee-ukraine/",
//         course: "01.2023",
//         experience: "Так",
//         motivation: "досвід",
//         resource: "сторінка Baza Educat в Facebook",
//         rule: true,
//         agree: true,
//         speciality: "Backend",
//       },
//     ]);

//   } catch (e) {
//     console.log("ERROR POSTS", e);
//   }
// };
