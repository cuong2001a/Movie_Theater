import React from "react";
import Slider from "react-slick";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Next from "./component/next/Next";
import Prev from "./component/prev/Prev";
import classes from "./register.module.scss";

const Register: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };
  return (
    <React.Fragment>
      <Header />
      <div className={classes.container}>
        <div className={classes.signin}>
          <div className={classes.left}>
            <h3 className={classes.title}>Thông tin đăng kí</h3>
            <form>
              <div className={classes.item_input}>
                <label className={classes.label}>Họ và tên :</label>
                <input type="text" />
              </div>
              <div className={classes.item_input}>
                <label className={classes.label}>Email :</label>
                <input type="text" />
              </div>
              <div className={classes.item_input}>
                <label className={classes.label}>Mật khẩu :</label>
                <input type="password" />
              </div>
              <div className={classes.item_input}>
                <label className={classes.label}>Nhập lại mật khẩu :</label>
                <input type="password" />
              </div>
              <div className={classes.item_input}>
                <label className={classes.label}>Số điện thoại :</label>
                <input type="text" />
              </div>
              <div className={classes.btn}>
                <button type="submit" className={classes.btn_register}>
                  Đăng kí thành viên
                </button>
              </div>
            </form>
          </div>
          <div className={classes.right}>
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
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Register;
