import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import YupPassword from "yup-password";
import AuthSlider from "../../components/auths/components/slider";
import classes from "./reset.module.scss";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthApi } from "../../api";
import { toast } from "react-toastify";
YupPassword(yup); // extend yup

const ResetPassword: React.FC = () => {
  const router = useLocation();
  const navigate = useNavigate();

  const [params] = useState(() => {
    const paramsInfo = queryString.parse(router?.search) || {};
    return paramsInfo;
  });

  useEffect(() => {
    if (!params?.id) {
      navigate("/signin");
    }
  }, [params]);

  const validationSchema = yup.object().shape({
    password: yup
      .string()
      .required("Required")
      .password()
      .minSymbols(1, "Ít nhất 1 ký tự đặc biệt nghe chưa")
      .min(8, "Chưa đủ 8 ký tự đâu. Nhập lại đê")
      .minUppercase(1, "Phải có 1 ký tự viết hoa"),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmitForm = async (values: any) => {
    const formValues = {
      resetPassword: values.password,
      id: params.id,
    };
    try {
      const res = await AuthApi.resetPassword(formValues as any);
      toast.success("Cập nhật thông tin thành công!");
      navigate("/signin");
    } catch (error: any) {
      toast.error(
        error?.error || "Cập nhật thông tin thất bại, vui lòng thử lại!!!"
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      rePassword: "",
    },
    onSubmit: handleSubmitForm,
    validationSchema,
    validateOnBlur: true,
  });

  return (
    <div className={classes.container}>
      <div className={classes.signin}>
        <div className={classes.left}>
          <h3 className={classes.title}>Thông tin đăng kí</h3>
          <form onSubmit={formik.handleSubmit}>
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
            {formik?.errors?.password && (
              <p className={classes.error}>{formik.errors.password}</p>
            )}
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
            {formik?.errors?.rePassword && (
              <p className={classes.error}>{formik.errors.rePassword}</p>
            )}
            <div className={classes.btn}>
              <button type="submit" className={classes.btn_register}>
                Reset password
              </button>
            </div>
          </form>
        </div>
        <div className={classes.right}>
          <AuthSlider classes={classes} />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
