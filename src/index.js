import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./modules";
import GlobalStyle from "./Styles/GlobalStyle";
import Theme from "./Styles/Theme";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
