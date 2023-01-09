import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import YupPassword from "yup-password";
import { AuthApi } from "../../api";
import AuthSlider from "../../components/auths/components/slider";
import { IRegisterForm } from "../../models";
import classes from "./register.module.scss";
YupPassword(yup); // extend yup

const Register: React.FC = () => {
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
    email: yup.string().email("Không đúng định dạng email"),
    phone: yup.string().required("Không bỏ qua sdt"),
  });

  const handleSubmitForm = async (values: IRegisterForm) => {
    try {
      await AuthApi.register(values);
      toast.success("Signup successfully");
    } catch (error: any) {
      toast.error(error?.error || "Signup failed");
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
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
            {formik?.errors?.email && (
              <p className={classes.error}>{formik.errors.email}</p>
            )}
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
          <AuthSlider classes={classes} />
        </div>
      </div>
    </div>
  );
};

export default Register;
