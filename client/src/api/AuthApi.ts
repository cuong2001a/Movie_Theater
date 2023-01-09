import {
  AuthFormValues,
  ForgotPasswordTypes,
  ResetPasswordTypes,
} from "../models";
import axiosClient from "./axiosClient";
import { AUTH_URL } from "./constant";

export function login(data: AuthFormValues) {
  return axiosClient.post(AUTH_URL.LOGIN, data);
}

export function register(data: AuthFormValues) {
  return axiosClient.post(AUTH_URL.REGISTER, data);
}

export function forgotPassword(data: ForgotPasswordTypes) {
  return axiosClient.post(AUTH_URL.FORGOT_PASSWORD, data);
}

export function resetPassword(data: ResetPasswordTypes) {
  return axiosClient.post(AUTH_URL.RESET_PASSWORD, data);
}
