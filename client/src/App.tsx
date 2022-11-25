import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LIST_ROUTES } from "./constant";
import { ItemRoute } from "./constant/models";
import classes from "./scss/App.module.scss";

function App() {
  return (
    <div className={classes.App}>
      <Router>
        <React.Suspense fallback={<div>LOADING...</div>}>
          <Routes>
            {LIST_ROUTES?.map((item: ItemRoute, index: number) => {
              return (
                <Route path={item.path} key={index} element={item.element} />
              );
            })}
          </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
