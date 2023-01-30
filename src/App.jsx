import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <ScrollButton />
      <Footer />
    </Fragment>
  );
}

export default App;
