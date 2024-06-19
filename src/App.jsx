import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layouts";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="login" element={<Login />} /> */}
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
