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

export const updateDeveloper = async (id, formData) => {
  const { first, last, speciality, email, nick, link } =
    Object.fromEntries(formData);
  try {
    const developer = await Developer.findByIdAndUpdate(
      { _id: id },
      {
        first: first,
        last: last,
        speciality: speciality,
        email: email,
        nick: nick,
        link: link,
      },
      {
        new: true,
      }
    ).lean();
    const data = JSON.parse(JSON.stringify(developer));
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
