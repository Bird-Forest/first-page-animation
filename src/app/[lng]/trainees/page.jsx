import React from "react";
import Speciality from "./_filestrainee/Speciality";
import Stages from "./_filestrainee/Stages";
import Advantages from "./_filestrainee/Advantages";

export default async function TraineesPage({ params: { lng } }) {
  return (
    <>
      <Speciality lng={lng} />
      <Stages lng={lng} />
      <Advantages lng={lng} />
    </>
  );
}
