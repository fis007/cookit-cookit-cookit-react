import React, { useState } from "react";
import SessionContext from "./contexts/SessionContext";
import Navbar from "./NavBar";
import StartPage from "./StartPage";
import Login from "./Login";
import Meals from "./Meals";
import SignUp from "./SignUp";
import AdminLogin from "./AdminLogin";
import AdminPage from "./AdminPage";
import AdminSignUp from "./AdminSignUp";
import AddMeal from "./AddMeal";

// export const url = "http://127.0.0.1:5000/api/v1";

export const url = "https://cookit-cookit-cookit.herokuapp.com/api/v1";

function App() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [imgUrl, setUrl] = useState();
  const [signUp, setSignUp] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [showAdminSignUpModal, setShowAdminSignUpModal] = useState(false);
  const [showStartPage, setShowStartPage] = useState(false);
  const [meals, setMeals] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showAddMealModal, setShowAddMealModal] = useState(false);
  const [ingredients, setIngredients] = useState(false);
  const [prepTime, setPrepTime] = useState(false);
  const [cookware, setCookware] = useState(false);

  //Funtions
  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);
  const toggleSignUpModal = () => setShowSignUpModal(!showSignUpModal);
  const toggleLogIn = () => setLoggedIn(!loggedIn);
  const toggleSignUp = () => setSignUp(!signUp);
  const toggleStartPage = () => setShowStartPage(!showStartPage);
  const toggleAdminModal = () => {
    setShowAdminModal(!showAdminModal);
    console.log(showAdminModal);
  };
  const toggleAdminLogin = () => setAdminLoggedIn(!adminLoggedIn);
  const toggleAdminSignUpModal = () =>
    setShowAdminSignUpModal(!showAdminSignUpModal);

  const toggleShowAddMealModal = () => setShowAddMealModal(!showAddMealModal);

  return (
    <SessionContext.Provider
      value={{
        name,
        setName,
        password,
        setPassword,
        email,
        setEmail,
        signUp,
        setSignUp,
        loggedIn,
        setLoggedIn,
        toggleLogIn,
        toggleSignUp,
        toggleSignUpModal,
        showLoginModal,
        showSignUpModal,
        toggleLoginModal,
        meals,
        setMeals,
        toggleStartPage,
        toggleAdminModal,
        showAdminModal,
        toggleAdminLogin,
        adminLoggedIn,
        setAdminLoggedIn,
        showAdminSignUpModal,
        toggleAdminSignUpModal,
        showAddMealModal,
        toggleShowAddMealModal,
        setIngredients,
        prepTime,
        cookware,
        setPrepTime,
        setCookware,
        ingredients,
        imgUrl,
        setUrl,
      }}
    >
      <Navbar />
      {!loggedIn && !adminLoggedIn ? <StartPage /> : ""}
      <SignUp />
      <Login />
      <AdminLogin />
      <AdminSignUp />
      <AddMeal />

      {loggedIn ? <Meals /> : ""}
      {adminLoggedIn ? <AdminPage /> : ""}
    </SessionContext.Provider>
  );
}

export default App;
