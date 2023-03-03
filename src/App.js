import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Public from "./components/Public";
import HomeLayout from "./components/Layouts/Home";
import "./App.css";
import React from "react";

// const APP_THEMES = ["light", "dark"];
const LOCAL_STORAGE_KEY = "app-theme";

function App() {
  // const themeMemo = React.useMemo(() => {
  //   const currentTheme = localStorage.getItem(LOCAL_STORAGE_KEY) || "light";
  //   const theme = APP_THEMES.find((theme) => theme === currentTheme);
  //   return theme || "light";
  // }, []);

  // React.useEffect(() => {
  //   // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  //   if (themeMemo === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [themeMemo]);

  // React.useEffect(() => {
  //   if (
  //     localStorage.getItem(LOCAL_STORAGE_KEY) === "dark" ||
  //     /* It's checking if the user has set a theme preference in localStorage, and if not, it's
  //     checking if the user's OS prefers dark mode. */
  //     (!(LOCAL_STORAGE_KEY in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            // <RequireAuth
            //   allowedRoles={[
            //     //finance roles
            //     30001, 30002, 30003, 30004, 30005, 77777, 88888, 99999,
            //   ]}
            // >
            <HomeLayout />
            // </RequireAuth>
          }
        >
          <Route index path="/" element={<Public />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
