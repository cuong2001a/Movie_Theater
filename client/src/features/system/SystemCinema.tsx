import React, { useState } from "react";
import ListMovie from "./component/ListMovie";
import ListTheater from "./component/ListTheater";
import classes from "./movieSchedule.module.scss";
const SystemCinema: React.FC = () => {
  const [active, setActive] = useState<Number>(1);
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.schedule}>
          <ul className={classes.list_schedule}>
            <li className={classes.item_schedule}>
              <button
                onClick={() => setActive(1)}
                className={
                  active === 1 ? classes.linkActive : classes.link_schedule
                }
              >
                Lịch chiếu theo rạp
              </button>
            </li>
            <li className={classes.item_schedule}>
              <span className={classes.line}>|</span>
            </li>
            <li className={classes.item_schedule}>
              <button
                onClick={() => setActive(2)}
                className={
                  active === 2 ? classes.linkActive : classes.link_schedule
                }
              >
                Lịch chiếu theo phim
              </button>
            </li>
          </ul>
          <div className={classes.render}>
            {active === 1 ? <ListTheater /> : <ListMovie />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SystemCinema;
