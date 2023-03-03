import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// const APP_THEMES = ["light", "dark"];
// const LOCAL_STORAGE_KEY = "app-theme";

// const theme = createTheme({
//   palette: {
//     // mode: localStorage.getItem(LOCAL_STORAGE_KEY) || "light",
//     primary: {
//       main: "#3f51b5",
//     },
//     secondary: {
//       main: "#f50057",
//     },
//   },
// });
// theme.components = componets

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
