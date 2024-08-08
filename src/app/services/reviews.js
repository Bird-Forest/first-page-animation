"use server";

import { Review } from "../models/review";

export const createReview = async (item) => {
  try {
    const newReview = await Review.create(item);
    const data = JSON.parse(JSON.stringify(newReview));
    console.log(data);
    return {
      message: "Ваш відгук отриманий",
    };
  } catch (e) {
    console.log(e);
    return {
      message: "Відбулася помилка",
    };
  }
};

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort("field -createdAt").lean();
    const data = JSON.parse(JSON.stringify(reviews));
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getReviewsRender = async (req, res) => {
  try {
    const reviews = await Review.find({ status: true }).lean();
    const data = JSON.parse(JSON.stringify(reviews));
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getReviewById = async (req, res) => {
  const { id } = req;

  try {
    const review = await Review.findById(id).lean();
    const data = JSON.parse(JSON.stringify(review));
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateReview = async (item, id) => {
  try {
    const review = await Review.findByIdAndUpdate({ _id: id }, item, {
      new: true,
    }).lean();
    // const data = JSON.parse(JSON.stringify(post));
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

export const deleteReview = async (id) => {
  try {
    const review = await Review.findOneAndDelete({ _id: id });
    // const data = JSON.parse(JSON.stringify(post));
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

export const getReviewSortBy19 = async (req, res) => {
  try {
    const reviews = await Review.find().sort("field createdAt").lean();
    const data = JSON.parse(JSON.stringify(reviews));
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getReviewSortBy91 = async (req, res) => {
  try {
    const reviews = await Review.find().sort("field -createdAt").lean();
    const data = JSON.parse(JSON.stringify(reviews));
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getReviewsTrue = async (req, res) => {
  try {
    const reviews = await Review.find({ status: true }).lean();
    const data = JSON.parse(JSON.stringify(reviews));
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getReviewsFalse = async (req, res) => {
  try {
    const reviews = await Review.find({ status: false }).lean();
    const data = JSON.parse(JSON.stringify(reviews));
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getReviewByName = async (word) => {
  try {
    const reviews = await Review.find({
      name: { $regex: word, $options: "i" },
    }).exec();
    const data = JSON.parse(JSON.stringify(reviews));
    return data;
  } catch (e) {
    console.log("Error fetching developers:", e);
    throw error;
  }
};
