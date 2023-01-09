import React from "react";

import Slider from "react-slick";
import Next from "../../../features/register/component/next/Next";
import Prev from "../../../features/register/component/prev/Prev";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <Next />,
  prevArrow: <Prev />,
};

function AuthSlider({ classes }: any) {
  return (
    <Slider {...settings}>
      <div className={classes.item}>
        <img
          className={classes.item_img}
          src="https://www.bhdstar.vn/wp-content/uploads/2018/03/BHD-Star-ScanQR-710x320.jpg"
          alt=""
        />
      </div>
      <div className={classes.item}>
        <img
          className={classes.item_img}
          src="https://www.bhdstar.vn/wp-content/uploads/2018/03/BHD-Star-APP-710x320.jpg"
          alt=""
        />
      </div>
      <div className={classes.item}>
        <img
          className={classes.item_img}
          src="https://www.bhdstar.vn/wp-content/uploads/2017/10/BHD-Star_Hotline_710x320-2.jpg"
          alt=""
        />
      </div>
    </Slider>
  );
}

export default AuthSlider;
