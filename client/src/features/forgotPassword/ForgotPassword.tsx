import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthApi } from "../../api";
import AuthSlider from "../../components/auths/components/slider";
import { ForgotPasswordTypes } from "../../models";
import classes from "./forgotPass.module.scss";

const ForgotPassword: React.FC = () => {
  const { register, handleSubmit } = useForm<ForgotPasswordTypes>();
  const onSubmit: SubmitHandler<ForgotPasswordTypes> = async values => {
    try {
      const res = await AuthApi.forgotPassword(values);
      console.log("Debug_here res: ", res);
      toast.success("Send request successfully");
    } catch (error: any) {
      const errorDetail = error?.response?.data;
      toast.error(errorDetail?.error || "Send request failed");
    }
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.signin}>
          <div className={classes.left}>
            <h3 className={classes.title}>Lấy lại mật khẩu</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={classes.item_input}>
                <label className={classes.label}>Email :</label>
                <input {...register("email")} />
              </div>
              <div className={classes.btn}>
                <button className={classes.btn_submit} type="submit">
                  Gửi yêu cầu
                </button>
                <Link to={"/signin"} className={classes.link}>
                  Đăng nhập
                </Link>
                <Link to={"/signup"} className={classes.link}>
                  Đăng ký
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

export default ForgotPassword;
