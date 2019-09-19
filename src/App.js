import React from "react";
import "./assets/scss/index.scss";

import { Landing, Header } from "./components";

const App = () => (
  <>
    <div id="layout">
      <Header />
      <Landing />
    </div>
  </>
);

export default App;
