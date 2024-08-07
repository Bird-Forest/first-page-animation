"use server";

import { Project } from "../models/project";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().lean();

    // if (!projects) {
    //   throw new Error("No projects found.");
    // }
    // console.log("Action", projects);
    const data = JSON.parse(JSON.stringify(projects));
    return data;
  } catch (e) {
    console.log("Action", e);
  }
};
export const getProjectById = async (req, res) => {
  const { id } = req;
  try {
    const project = await Project.findById(id).lean();
    const data = JSON.parse(JSON.stringify(project));
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const createNewProject = async (item) => {
  // console.log("PROJECT NEW", item);
  try {
    const newProject = await Project.create(item).lean();
    const data = JSON.parse(JSON.stringify(newProject));
    // console.log("PROJECT", data);
    return {
      message: "Успішно додано",
    };
  } catch (e) {
    console.log(e);
    return {
      message: "Відбулася помилка",
    };
  }
};

export const updateProject = async (item, id) => {
  try {
    const project = await Project.findByIdAndUpdate({ _id: id }, item, {
      new: true,
    }).lean();
    // const data = JSON.parse(JSON.stringify(project));
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

export const deleteProject = async (id) => {
  try {
    const project = await Project.findOneAndDelete({ _id: id }).lean();
    // const data = JSON.parse(JSON.stringify(project));
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

export const getProjectsByTitle = async (word) => {
  console.log("WORD PROJ", word);
  const regex = new RegExp(word, "i");
  try {
    const projects = await Project.find({
      name: regex,
    }).lean();
    const data = JSON.parse(JSON.stringify(projects));
    return data;
  } catch (e) {
    console.log("Error fetching developers:", e);
    throw error;
  }
};

export const getProjectsByStatus = async (obj) => {
  try {
    const projects = await Project.find({ status: obj }).lean();
    const data = JSON.parse(JSON.stringify(projects));
    return data;
  } catch (e) {
    console.log(e);
  }
};

// MyModel.find({ name: regex }, (err, results) => {
//   if (err) {
//     console.error("Ошибка при поиске:", err);
//   } else {
//     console.log("Найденные объекты:", results);
//   }
// });

// *** Функція, яка відправляє масив обєктів в базу даних, створює коллекцію
// export const createProjects = async () => {
//   try {
//     // await connectDB();
//     const docs = await Project.insertMany([
//       {
//         status: { color: "#099e56", text: "Завершено" },
//         name: "Збір для 57-ї бригади 42 батальйону",
//         web: "https://dokoopy-frontend.vercel.app/",
//         start: new Date(),
//         duration: "11 тижнів",
//         difficult: 2,
//         team: [
//           { title: "Project Manager", developers: ["Зоря Ілля"] },
//           {
//             title: "Design UX/UI",
//             developers: ["Калинка Марія", "Творча Аліна"],
//           },
//           {
//             title: "Front-end",
//             developers: [
//               "Спокійний Іван",
//               "Кмітлива Настя",
//               "Роботящий Андрій",
//               "Розумна Олена",
//             ],
//           },
//           {
//             title: "Back-end",
//             developers: ["Веселий Олександр", "Розважливий Василь"],
//           },
//           {
//             title: "Quality Assurance",
//             developers: ["Уважна Ольга", "Працелюбна Оксана"],
//           },
//           {
//             title: "Full Stack",
//             developers: [
//               "Непоседючий Максим",
//               "Зорепад Остап",
//               "Круглий Сергій",
//               "Непитущий Віктор",
//             ],
//           },
//         ],
//         imageUrl: "http://localhost:3000/public/images/projects/donate57.webp",
//       },
//       {
//         status: { color: "#099e56", text: "Завершено" },
//         name: "Платформа Balakun для комунікації англійською",
//         web: "https://balakun-fia4.vercel.app/",
//         start: new Date(),
//         duration: "17 тижнів",
//         difficult: 5,
//         team: [
//           { title: "Project Manager", developers: ["Зоря Ілля"] },
//           {
//             title: "Design UX/UI",
//             developers: ["Калинка Марія", "Творча Аліна"],
//           },
//           {
//             title: "Front-end",
//             developers: [
//               "Спокійний Іван",
//               "Кмітлива Настя",
//               "Роботящий Андрій",
//               "Розумна Олена",
//             ],
//           },
//           {
//             title: "Back-end",
//             developers: ["Веселий Олександр", "Розважливий Василь"],
//           },
//           {
//             title: "Quality Assurance",
//             developers: ["Уважна Ольга", "Працелюбна Оксана"],
//           },
//           {
//             title: "Full Stack",
//             developers: [
//               "Непоседючий Максим",
//               "Зорепад Остап",
//               "Круглий Сергій",
//               "Непитущий Віктор",
//             ],
//           },
//         ],
//         imageUrl: "http://localhost:3000/public/images/projects/balakun.webp",
//       },
//       {
//         status: { color: "#099e56", text: "Завершено" },
//         name: "1000 і 1 пісня - платформа українського фольклору",
//         web: "https://1000and1songs.com/",
//         start: new Date(),
//         duration: "18 тижнів",
//         difficult: 5,
//         team: [
//           { title: "Project Manager", developers: ["Зоря Ілля"] },
//           {
//             title: "Design UX/UI",
//             developers: ["Калинка Марія", "Творча Аліна"],
//           },
//           {
//             title: "Front-end",
//             developers: [
//               "Спокійний Іван",
//               "Кмітлива Настя",
//               "Роботящий Андрій",
//               "Розумна Олена",
//             ],
//           },
//           {
//             title: "Back-end",
//             developers: ["Веселий Олександр", "Розважливий Василь"],
//           },
//           {
//             title: "Quality Assurance",
//             developers: ["Уважна Ольга", "Працелюбна Оксана"],
//           },
//           {
//             title: "Full Stack",
//             developers: [
//               "Непоседючий Максим",
//               "Зорепад Остап",
//               "Круглий Сергій",
//               "Непитущий Віктор",
//             ],
//           },
//         ],
//         imageUrl: "http://localhost:3000/public/images/projects/1001songs.webp",
//       },
//       {
//         status: { color: "#ffeb3b", text: "В розробці" },
//         name: "БУП - бюро лікарняних клоунів",
//         web: "Тимчасово не доступний",
//         start: new Date(),
//         duration: "5 тижнів",
//         difficult: 3,
//         team: [
//           { title: "Project Manager", developers: ["Зоря Ілля"] },
//           {
//             title: "Design UX/UI",
//             developers: ["Калинка Марія", "Творча Аліна"],
//           },
//           {
//             title: "Front-end",
//             developers: [
//               "Спокійний Іван",
//               "Кмітлива Настя",
//               "Роботящий Андрій",
//               "Розумна Олена",
//             ],
//           },
//           {
//             title: "Back-end",
//             developers: ["Веселий Олександр", "Розважливий Василь"],
//           },
//           {
//             title: "Quality Assurance",
//             developers: ["Уважна Ольга", "Працелюбна Оксана"],
//           },
//           {
//             title: "Full Stack",
//             developers: [
//               "Непоседючий Максим",
//               "Зорепад Остап",
//               "Круглий Сергій",
//               "Непитущий Віктор",
//             ],
//           },
//         ],
//         imageUrl: "http://localhost:3000/public/images/projects/dev.webp",
//       },
//       {
//         status: { color: "#ffeb3b", text: "В розробці" },
//         name: "Big Lapa - притулок для собак",
//         web: "Тимчасово не доступний",
//         start: new Date(),
//         duration: "12 тижнів",
//         difficult: 3,
//         team: [
//           { title: "Project Manager", developers: ["Зоря Ілля"] },
//           {
//             title: "Design UX/UI",
//             developers: ["Калинка Марія", "Творча Аліна"],
//           },
//           {
//             title: "Front-end",
//             developers: [
//               "Спокійний Іван",
//               "Кмітлива Настя",
//               "Роботящий Андрій",
//               "Розумна Олена",
//             ],
//           },
//           {
//             title: "Back-end",
//             developers: ["Веселий Олександр", "Розважливий Василь"],
//           },
//           {
//             title: "Quality Assurance",
//             developers: ["Уважна Ольга", "Працелюбна Оксана"],
//           },
//           {
//             title: "Full Stack",
//             developers: [
//               "Непоседючий Максим",
//               "Зорепад Остап",
//               "Круглий Сергій",
//               "Непитущий Віктор",
//             ],
//           },
//         ],
//         imageUrl: "http://localhost:3000/public/images/projects/lapa.webp",
//       },
//       {
//         status: { color: "#099e56", text: "Завершено" },
//         name: "Книжка їде за кордон - портал гуманітарної допомоги",
//         web: "https://www.openbookhands.site/",
//         start: new Date(),
//         duration: "5 тижнів",
//         difficult: 3,
//         team: [
//           { title: "Project Manager", developers: ["Зоря Ілля"] },
//           {
//             title: "Design UX/UI",
//             developers: ["Калинка Марія", "Творча Аліна"],
//           },
//           {
//             title: "Front-end",
//             developers: [
//               "Спокійний Іван",
//               "Кмітлива Настя",
//               "Роботящий Андрій",
//               "Розумна Олена",
//             ],
//           },
//           {
//             title: "Back-end",
//             developers: ["Веселий Олександр", "Розважливий Василь"],
//           },
//           {
//             title: "Quality Assurance",
//             developers: ["Уважна Ольга", "Працелюбна Оксана"],
//           },
//           {
//             title: "Full Stack",
//             developers: [
//               "Непоседючий Максим",
//               "Зорепад Остап",
//               "Круглий Сергій",
//               "Непитущий Віктор",
//             ],
//           },
//         ],
//         imageUrl: "http://localhost:3000/public/images/projects/book.webp",
//       },
//       {
//         status: { color: "#099e56", text: "Завершено" },
//         name: "Колискові - платформа української колискової",
//         web: "https://www.kolyskova.com",
//         start: new Date(),
//         duration: "14 тижнів",
//         difficult: 5,
//         team: [
//           { title: "Project Manager", developers: ["Зоря Ілля"] },
//           {
//             title: "Design UX/UI",
//             developers: ["Калинка Марія", "Творча Аліна"],
//           },
//           {
//             title: "Front-end",
//             developers: [
//               "Спокійний Іван",
//               "Кмітлива Настя",
//               "Роботящий Андрій",
//               "Розумна Олена",
//             ],
//           },
//           {
//             title: "Back-end",
//             developers: ["Веселий Олександр", "Розважливий Василь"],
//           },
//           {
//             title: "Quality Assurance",
//             developers: ["Уважна Ольга", "Працелюбна Оксана"],
//           },
//           {
//             title: "Full Stack",
//             developers: [
//               "Непоседючий Максим",
//               "Зорепад Остап",
//               "Круглий Сергій",
//               "Непитущий Віктор",
//             ],
//           },
//         ],
//         imageUrl: "http://localhost:3000/public/images/projects/lule.webp",
//       },
//       {
//         status: { color: "#099e56", text: "Завершено" },
//         name: "Читозаврик - додаток української дитячої книжки",
//         web: "https://chytozavryk.top/",
//         start: new Date(),
//         duration: "30 тижнів",
//         difficult: 5,
//         team: [
//           { title: "Project Manager", developers: ["Зоря Ілля"] },
//           {
//             title: "Design UX/UI",
//             developers: ["Калинка Марія", "Творча Аліна"],
//           },
//           {
//             title: "Front-end",
//             developers: [
//               "Спокійний Іван",
//               "Кмітлива Настя",
//               "Роботящий Андрій",
//               "Розумна Олена",
//             ],
//           },
//           {
//             title: "Back-end",
//             developers: ["Веселий Олександр", "Розважливий Василь"],
//           },
//           {
//             title: "Quality Assurance",
//             developers: ["Уважна Ольга", "Працелюбна Оксана"],
//           },
//           {
//             title: "Full Stack",
//             developers: [
//               "Непоседючий Максим",
//               "Зорепад Остап",
//               "Круглий Сергій",
//               "Непитущий Віктор",
//             ],
//           },
//         ],
//         imageUrl: "http://localhost:3000/public/images/projects/zavr.webp",
//       },
//       {
//         status: { color: "#099e56", text: "Завершено" },
//         name: "Murrfecto -притулок для котів",
//         web: "https://murrfecto.site/",
//         start: new Date(),
//         duration: "5 тижнів",
//         difficult: 3,
//         team: [
//           { title: "Project Manager", developers: ["Зоря Ілля"] },
//           {
//             title: "Design UX/UI",
//             developers: ["Калинка Марія", "Творча Аліна"],
//           },
//           {
//             title: "Front-end",
//             developers: [
//               "Спокійний Іван",
//               "Кмітлива Настя",
//               "Роботящий Андрій",
//               "Розумна Олена",
//             ],
//           },
//           {
//             title: "Back-end",
//             developers: ["Веселий Олександр", "Розважливий Василь"],
//           },
//           {
//             title: "Quality Assurance",
//             developers: ["Уважна Ольга", "Працелюбна Оксана"],
//           },
//           {
//             title: "Full Stack",
//             developers: [
//               "Непоседючий Максим",
//               "Зорепад Остап",
//               "Круглий Сергій",
//               "Непитущий Віктор",
//             ],
//           },
//         ],
//         imageUrl: "http://localhost:3000/public/images/projects/murrfecto.webp",
//       },
//       {
//         status: { color: "#099e56", text: "Завершено" },
//         name: "Притулок для собак Хвостики Чернівці",
//         web: "https://martys-dogs.vercel.app/",
//         start: new Date(),
//         duration: "11 тижнів",
//         difficult: 3,
//         team: [
//           { title: "Project Manager", developers: ["Зоря Ілля"] },
//           {
//             title: "Design UX/UI",
//             developers: ["Калинка Марія", "Творча Аліна"],
//           },
//           {
//             title: "Front-end",
//             developers: [
//               "Спокійний Іван",
//               "Кмітлива Настя",
//               "Роботящий Андрій",
//               "Розумна Олена",
//             ],
//           },
//           {
//             title: "Back-end",
//             developers: ["Веселий Олександр", "Розважливий Василь"],
//           },
//           {
//             title: "Quality Assurance",
//             developers: ["Уважна Ольга", "Працелюбна Оксана"],
//           },
//           {
//             title: "Full Stack",
//             developers: [
//               "Непоседючий Максим",
//               "Зорепад Остап",
//               "Круглий Сергій",
//               "Непитущий Віктор",
//             ],
//           },
//         ],
//         imageUrl: "http://localhost:3000/public/images/projects/hvost.webp",
//       },
//       {
//         status: { color: "#ff1744", text: "Формування команди" },
//         name: "Feeda - додаток для обробки даних",
//         web: "Тимчасово не доступний",
//         start: new Date(),
//         duration: "22 тижні",
//         difficult: 5,
//         team: [],
//         imageUrl: "http://localhost:3000/public/images/projects/team.webp",
//       },
//       {
//         status: { color: "#ff1744", text: "Формування команди" },
//         name: "Сталеві обійми - збір для 59-ї бригади",
//         web: "Тимчасово не доступний",
//         start: new Date(),
//         duration: "22 тижні",
//         difficult: 4,
//         team: [],
//         imageUrl: "/public/images/projects/team.webp",
//       },
//     ]);
//     // console.log("Action", docs);
//     // res.json(docs);
//   } catch (e) {
//     console.log("Action", e);
//   }
// };
// createProjects();
