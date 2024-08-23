"use server";

// import multer from "multer";
import path from "path";
import { Buffer } from "buffer";
import { writeFile } from "fs/promises";

// const tempDir = path.join(__dirname, "temp");
// console.log("PATH", tempDir);

export const projectDir = path.join(__dirname, "public");
console.log("PRO", projectDir);

// const multerConfig = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, tempDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({
//   storage: multerConfig,
// });
// console.log(upload);

export const uploadAnyFile = async (formData) => {
  // console.log("FORM", formData);
  const myFile = formData.get("upfile");
  // console.log("MY", myFile);
  const fileName = myFile.name;
  // console.log(fileName);
  //   const resultDir = path.join(projectDir, fileName);
  //   console.log("RESULT", resultDir);

  const imagePath = path.join(
    // process.cwd(),
    `public`,
    fileName
  );

  // console.log("Path", imagePath);
  const buffer = await myFile.arrayBuffer();
  const fileBuffer = Buffer.from(buffer);
  // console.log("BUF", buffer);

  const image = await writeFile(imagePath, fileBuffer);
  // console.log("IMG", image);

  //   const setFileMiddleware = upload.single("upfile");
  //   const setFile = upload.single(myFile);
  //   console.log(setFile);
};

// Ваш маршрут (route handler):
// app.post("/upload", async (req, res) => {
//   try {
//     await setFileMiddleware(req, res, (err) => {
//       if (err) {
//         // Обработка ошибок загрузки
//         console.error("Ошибка загрузки файла:", err);
//         return res.status(500).send("Ошибка загрузки файла");
//       }

//       // Загрузка успешно завершена
//       console.log("Файл успешно загружен:", req.file);
//       // Дополнительная обработка, если необходимо

//       // Возвращаем ответ клиенту
//       res.status(200).send("Файл успешно загружен");
//     });
//   } catch (error) {
//     console.error("Ошибка сервера:", error);
//     res.status(500).send("Ошибка сервера");
//   }
// });
