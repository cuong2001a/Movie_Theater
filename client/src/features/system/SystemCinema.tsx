import React, { useCallback, useRef, useState } from "react";
import ListMovie from "./component/ListMovie";
import ListTheater from "./component/ListTheater";
import MovieDetails from "./component/MovieDetails";
import classes from "./movieSchedule.module.scss";
import { getToken } from "../../api/Cookie";

const SystemCinema: React.FC = () => {
  const [active, setActive] = useState<number>(1);
  const cookie = getToken();

  const [movieSelected, setMovieSelected] = useState({});
  const movieDetailRef = useRef<any>(null);

  const handleClickMovieItem = useCallback(() => {
    movieDetailRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }, []);

  const handleSelectMovieDetail = (threater: any) => {
    setMovieSelected(threater);
  };

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
                Lịch chiếu theo phim
              </button>
            </li>
            <span className={classes.line}>|</span>
            <li className={classes.item_schedule}>
              <button
                onClick={() => setActive(2)}
                className={
                  active === 2 ? classes.linkActive : classes.link_schedule
                }
              >
                Lịch chiếu theo rạp
              </button>
            </li>
          </ul>
          <div className={classes.render}>
            {active === 1 ? (
              <ListMovie
                handleClickMovieItem={handleClickMovieItem}
                onSelected={handleSelectMovieDetail}
              />
            ) : (
              <ListTheater />
            )}
            <div className={classes.borderBottom}></div>
          </div>
          <div ref={movieDetailRef} className={classes.movieDetails}>
            {Object.keys(movieSelected).length && (
              <MovieDetails movie={movieSelected} />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SystemCinema;
