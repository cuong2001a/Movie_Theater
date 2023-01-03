import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { IItemTheater, LIST_THREATER } from "../constant";
import "./listMovie.scss";
import { v4 as uuidv4 } from "uuid";

const ListMovie = () => {
  const paginationProps = {
    clickable: true,
  };

  return (
    <Swiper
      pagination={{ ...paginationProps }}
      modules={[Pagination]}
      className="mySwiper"
      slidesPerView={5}
      spaceBetween={30}
      autoplay={{
        delay: 500,
      }}
    >
      {LIST_THREATER.map((threater: IItemTheater) => (
        <SwiperSlide key={uuidv4()} className="threater__item">
          <div className="threater__item-image">
            <img src={threater.urlImage} alt={threater.title} />
          </div>
          <span className="threater__item-title">{threater.title}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ListMovie;
