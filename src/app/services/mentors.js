"use server";

import { Mentor } from "../models/mentor";

export const createMentor = async (values) => {
  console.log("ACT VALUES", values);
  try {
    const ment = await Mentor.create(values);
    // console.log("Action", ment);
    return {
      message: "Успішно оновлено",
    };
  } catch (e) {
    console.log("User", e);
    return {
      message: "Відбулася помилка",
    };
  }
};

export const getMentors = async (req, res) => {
  try {
    const devs = await Mentor.find().lean();

    const data = JSON.parse(JSON.stringify(devs));
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getMentorById = async (req, res) => {
  const { id } = req;
  try {
    const dev = await Mentor.findById(id).lean();

    const data = JSON.parse(JSON.stringify(dev));
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateMentor = async (item, id) => {
  try {
    const developer = await Mentor.findByIdAndUpdate({ _id: id }, item, {
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

export const deleteMentor = async (id) => {
  try {
    const develper = await Mentor.findOneAndDelete({ _id: id });
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

export const getMentorsBySpeciality = async (special) => {
  try {
    const filter = await Mentor.find({
      speciality: special,
    });
    const data = JSON.parse(JSON.stringify(filter));
    return data;
  } catch (e) {
    console.log("Error fetching developers:", e);
    throw error;
  }
};
