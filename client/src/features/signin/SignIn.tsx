import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { AuthApi } from "../../api";
import { AuthFormValues } from "../../models";
import Next from "../register/component/next/Next";
import Prev from "../register/component/prev/Prev";
import classes from "./signin.module.scss";
import { toast, ToastContainer } from "react-toastify";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <Next />,
  prevArrow: <Prev />,
};

const SignIn: React.FC = () => {
  const { register, handleSubmit } = useForm<AuthFormValues>();
  const onSubmit: SubmitHandler<AuthFormValues> = async values => {
    try {
      await AuthApi.login(values);
      toast.success("Login successfully");
    } catch (error: any) {
      const errorDetail = error?.response?.data;
      toast.error(errorDetail?.error || "Login failed");
    }
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.signin}>
          <div className={classes.left}>
            <h3 className={classes.title}>Đăng nhập</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={classes.item_input}>
                <label className={classes.label}>Email :</label>
                <input {...register("email")} />
              </div>
              <div className={classes.item_input}>
                <label className={classes.label}>Password :</label>
                <input {...register("password")} type="password" />
              </div>
              <div className={classes.btn}>
                <button className={classes.btn_submit} type="submit">
                  Đăng nhập
                </button>
                <Link to={"/register"} className={classes.btn_register}>
                  Đăng kí
                </Link>
                <Link to={"/"} className={classes.link}>
                  Quên mật khẩu ?
                </Link>
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
      <ToastContainer />
    </React.Fragment>
  );
};

export default SignIn;
