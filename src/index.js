import React from "react";
import App from "./App";
import store, { persistor } from "./store";
import ReactDOM from "react-dom/client";
import Theme from "./components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
const anchorOrigin = {
  vertical: "top",
  horizontal: "right",
};
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <PersistGate persistor={persistor} loading={null}>
          <BrowserRouter>
            <SnackbarProvider anchorOrigin={anchorOrigin}>
              <App />
            </SnackbarProvider>
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
