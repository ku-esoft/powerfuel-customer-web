import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./assets/styles/app.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2ab5bf",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#69c464",
      contrastText: "#ffffff",
    },
    success: {
      main: "#69c464",
    },
    error: {
      main: "#e8231b",
    },
    neutral: {
      main: "#E0E0E0",
      light: "#fff",
      dark: "#9E9E9E",
    },
    default: {
      main: "#F5F5F5",
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
    fontSize: 13,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#fff",
          color: "#b7b7b7",
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
