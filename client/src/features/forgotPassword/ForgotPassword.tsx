import React, { useEffect, useRef, useState } from "react";
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
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef<any>(null);

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

  useEffect(() => {
    if (counter === 60) {
      intervalRef.current = setInterval(() => {
        setCounter(prev => prev - 1);
      }, 1000);
    }

    return () => {
      if (counter === 1) {
        clearInterval(intervalRef.current);
      }
    };
  }, [counter]);

  const onSubmit: SubmitHandler<ForgotPasswordTypes> = async values => {
    try {
      setCounter(60);
      await AuthApi.forgotPassword(values);
      toast.success("Gửi yêu cầu thành công, vui lòng check email.");
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
                <button
                  disabled={counter !== 0}
                  className={classes.btn_submit}
                  type="submit"
                >
                  Gửi yêu cầu
                </button>
                {counter !== 0 && <span>Gửi lại sau {counter}s</span>}
              </div>
              <div className={classes.link}>
                <Link to={"/signin"}>Đăng nhập</Link>
                <Link to={"/register"}>Đăng ký</Link>
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
