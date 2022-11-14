import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {itemRoute, listRoute} from "./constant"
import classes from "./scss/App.module.scss"

function App() {
  return (
    <div className={classes.App}>
      <Router>
        <React.Suspense>
          <React.Fragment>
            <Routes>
              {listRoute?.map((item: itemRoute, index: number) => {
                return <Route path={item.path} key={index} element={item.element} />
              })}
            </Routes>
          </React.Fragment>
        </React.Suspense>
      </Router>
    </div>
  )
}

export default App
