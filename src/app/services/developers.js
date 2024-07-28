"use server";

import { Developer } from "../models/developer";

export const createDeveloper = async (values) => {
  try {
    const newDev = await Developer.create(values);
    // console.log("Action", newDev);
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
