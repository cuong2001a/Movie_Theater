import React, { ReactElement, useCallback, useEffect, useState } from "react";
import classes from "../home.module.scss";
import Slider from "react-slick";
import { GrPrevious, GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { SettingSlickMovie } from "../../../constant/models";

interface TypeItemMovie {
  id: number;
  name: string;
  dateTo: string;
  dateFrom: string;
  images: string;
}
const data = [
  {
    id: 0,
    name: "Doraemon 2 : STAND BY ME",
    dateTo: "09/03/2022",
    dateFrom: "28/08/2022",
    images:
      "https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640168025/poster_movie/xxlsvvjzr5bn7zza5xy6.jpg",
  },
  {
    id: 1,
    name: "Doraemon 2 : STAND BY ME 1",
    dateTo: "09/03/2022",
    dateFrom: "28/08/2022",
    images:
      "https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640168025/poster_movie/xxlsvvjzr5bn7zza5xy6.jpg",
  },
  {
    id: 2,
    name: "Doraemon 2 : STAND BY ME 2",
    dateTo: "09/03/2022",
    dateFrom: "28/08/2022",
    images:
      "https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640168025/poster_movie/xxlsvvjzr5bn7zza5xy6.jpg",
  },
  {
    id: 3,
    name: "Doraemon 2 : STAND BY ME 3",
    dateTo: "09/03/2022",
    dateFrom: "28/08/2022",
    images:
      "https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640168025/poster_movie/xxlsvvjzr5bn7zza5xy6.jpg",
  },
  {
    id: 4,
    name: "Doraemon 2 : STAND BY ME 4",
    dateTo: "09/03/2022",
    dateFrom: "28/08/2022",
    images:
      "https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640168025/poster_movie/xxlsvvjzr5bn7zza5xy6.jpg",
  },
];
const CurrentMovie = () => {
  const [isHover, setIsHover] = useState<Boolean>(false);
  const [indexActive, setIndexActive] = useState<number | undefined>();
  const setting: SettingSlickMovie = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <GrNext />,
    prevArrow: <GrPrevious />,
  };

  useEffect(() => {
    if (indexActive || indexActive == 0) {
      setIsHover(true);
    } else {
      setIsHover(false);
    }
  }, [indexActive]);

  return (
    <React.Fragment>
      <div className={classes.currentMovie}>
        <span className={classes.title}>-- Phim hiện đang chiếu --</span>
        <Slider {...setting}>
          {data?.map((item: TypeItemMovie, index: number) => {
            return (
              <div
                key={index}
                className={classes.item}
                onMouseOver={() => setIndexActive(index)}
                onMouseOut={() => setIndexActive(undefined)}
              >
                <img src={item.images} alt="Thông tin hình ảnh" />
                <div
                  className={
                    isHover && indexActive == index
                      ? classes.info_hover
                      : classes.info
                  }
                >
                  <h3 className={classes.info__title}>{item.name}</h3>
                  <p className={classes.info__time}>
                    từ {item.dateFrom} đến {item.dateTo}
                  </p>
                </div>
                <div className={classes.order}>
                  <Link to={"/"} className={classes.link}>
                    Mua vé
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default CurrentMovie;
