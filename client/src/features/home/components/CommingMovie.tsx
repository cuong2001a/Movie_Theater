import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { SettingSlickMovie } from "../../../constant/models";
import classes from "../home.module.scss";
const CommingMovie = () => {
  const [isHover, setIsHover] = useState<Boolean>(false);
  const setting: SettingSlickMovie = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <GrNext />,
    prevArrow: <GrPrevious />,
  };
  return (
    <React.Fragment>
      <div className={classes.currentMovie}>
        <span className={classes.title}>-- Phim sắp chiếu --</span>
        <Slider {...setting}>
          <div
            className={classes.item}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
          >
            <img
              src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640168025/poster_movie/xxlsvvjzr5bn7zza5xy6.jpg"
              alt=""
            />
            <div className={isHover ? classes.info_hover : classes.info}>
              <h3 className={classes.info__title}>Doraemon 2 : STAND BY ME</h3>
              <p className={classes.info__time}>từ 09/03/2022 đến 28/08/2022</p>
            </div>
            <div className={classes.order}>
              <Link to={"/"} className={classes.link}>
                Mua vé
              </Link>
            </div>
          </div>
          <div className={classes.item}>
            <img
              src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640168025/poster_movie/xxlsvvjzr5bn7zza5xy6.jpg"
              alt=""
            />
          </div>
          <div className={classes.item}>
            <img
              src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640168025/poster_movie/xxlsvvjzr5bn7zza5xy6.jpg"
              alt=""
            />
          </div>
          <div className={classes.item}>
            <img
              src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640168025/poster_movie/xxlsvvjzr5bn7zza5xy6.jpg"
              alt=""
            />
          </div>
          <div className={classes.item}>
            <img
              src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640168025/poster_movie/xxlsvvjzr5bn7zza5xy6.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default CommingMovie;
