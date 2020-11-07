import React, { useState } from "react";
import SessionContext from "./contexts/SessionContext";
import Navbar from "./NavBar";
import StartPage from "./StartPage";
import Login from "./Login";
import Meals from "./Meals";

export const url = "http://127.0.0.1:5000/api/v1";

function App() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [modal, setModal] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [meals, setMeals] = useState([]);

  //Funtions
  const toggle = () => setModal(!modal);

  return (
    <SessionContext.Provider
      value={{
        name,
        setName,
        password,
        setPassword,
        modal,
        setModal,
        signUp,
        setSignUp,
        loggedIn,
        setLoggedIn,
        toggle,
        meals,
        setMeals,
      }}
    >
      <Navbar />
      {!loggedIn ? <StartPage /> : ""}

      <Login />
      {loggedIn ? <Meals /> : ""}
    </SessionContext.Provider>
  );
}

export default App;
