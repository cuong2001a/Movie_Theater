import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.scss";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

interface ISwiperProps {
  list: string[];
  navigation?: boolean;
  pauseOnMouseEnter?: boolean;
}

function SwiperCutom({
  list,
  navigation = false,
  pauseOnMouseEnter = false,
}: ISwiperProps) {
  return (
    <>
      <Swiper
        navigation={navigation}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter,
        }}
      >
        {list.length &&
          list.map(url => (
            <SwiperSlide key={uuidv4()}>
              <img src={url} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default SwiperCutom;
