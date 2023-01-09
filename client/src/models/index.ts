export type AuthFormValues = {
  email: string;
  password: string;
};

export type IRegisterForm = {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
};

export type ForgotPasswordTypes = {
  email: string;
};

export type ResetPasswordTypes = {
  password: string;
  id: string | null;
};
