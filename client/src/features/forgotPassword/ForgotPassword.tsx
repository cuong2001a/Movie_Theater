import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthApi } from "../../api";
import AuthSlider from "../../components/auths/components/slider";
import { ForgotPasswordTypes } from "../../models";
import classes from "./forgotPass.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ForgotPassword: React.FC = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Required")
      .email("Không đúng định dạng email"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordTypes>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ForgotPasswordTypes> = async values => {
    try {
      await AuthApi.forgotPassword(values);
      toast.success("Gửi yêu cầu thành công");
    } catch (error: any) {
      const errorDetail = error?.response?.data;
      toast.error(errorDetail?.message || "Có lỗi xảy ra, vui lòng thử lại!");
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
              {errors.email && (
                <p className={classes.error}>{errors.email.message}</p>
              )}
              <div className={classes.btn}>
                <button className={classes.btn_submit} type="submit">
                  Gửi yêu cầu
                </button>
                <Link to={"/signin"} className={classes.link}>
                  Đăng nhập
                </Link>
                <Link to={"/register"} className={classes.link}>
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
