import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { url } from "./App";
import SessionContext from "./contexts/SessionContext";
import Meal from "./Meal";

export default function Meals() {
  const { meals, setMeals } = useContext(SessionContext);

  useEffect(() => {
    // performing a GET request
    axios
      .get(`${url}/meals`)
      .then((result) => {
        // If successful, we do stuffs with 'result'
        console.log(result.data);
        setMeals(result.data);
      })
      .catch((error) => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }, []);

  return (
    <div
      style={{
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {meals.map((meal) => {
          return <Meal meal={meal} />;
        })}
      </div>
    </div>
  );
}
