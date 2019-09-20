import React from "react";
import "./assets/scss/index.scss";

import { Landing, Header } from "./components";

const App = () => (
  <>
    <main id="layout">
      <Header />
      <Landing />
    </main>
  </>
);

export default App;
