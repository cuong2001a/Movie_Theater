import React from "react";
import Slider from "react-slick";
import Next from "./component/next/Next";
import Prev from "./component/prev/Prev";
import classes from "./register.module.scss";
import { useFormik } from "formik";

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
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={classes.container}>
      <div className={classes.signin}>
        <div className={classes.left}>
          <h3 className={classes.title}>Thông tin đăng kí</h3>
          <form onSubmit={formik.handleSubmit}>
            <div className={classes.item_input}>
              <label htmlFor="name" className={classes.label}>
                Họ và tên :
              </label>
              <input
                id="name"
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className={classes.item_input}>
              <label htmlFor="email" className={classes.label}>
                Email :
              </label>
              <input
                id="email"
                type="text"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className={classes.item_input}>
              <label htmlFor="password" className={classes.label}>
                Mật khẩu :
              </label>
              <input
                id="password"
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
            <div className={classes.item_input}>
              <label htmlFor="rePass" className={classes.label}>
                Nhập lại mật khẩu :
              </label>
              <input
                id="rePass"
                type="password"
                name="rePassword"
                onChange={formik.handleChange}
                value={formik.values.rePassword}
              />
            </div>
            <div className={classes.item_input}>
              <label htmlFor="phone" className={classes.label}>
                Số điện thoại :
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
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
  );
};

export default Register;
