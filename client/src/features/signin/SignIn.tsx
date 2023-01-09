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
import AuthSlider from "../../components/auths/components/slider";

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
                <Link to={"/forgot-password"} className={classes.link}>
                  Quên mật khẩu ?
                </Link>
              </div>
            </form>
          </div>
          <div className={classes.right}>
            <AuthSlider classes={classes} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default SignIn;
