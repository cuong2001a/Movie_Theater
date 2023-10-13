import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layouts from "./components/layouts";
import { LIST_ROUTES } from "./constant";
import { ItemRoute } from "./constant/models";
// import classes from "@src/assets/scss/App.module.scss";

export default function App() {
  return (
    // <div className={classes.App}>
    <Router>
      <React.Suspense fallback={<div>LOADING...</div>}>
        <Routes>
          <Route path="/" element={<Layouts />}>
            {LIST_ROUTES?.map((item: ItemRoute, index: number) => {
              return (
                <Route path={item.path} key={index} element={item.element} />
              );
            })}
          </Route>
        </Routes>
      </React.Suspense>
    </Router>
    // </div>
  );
}
