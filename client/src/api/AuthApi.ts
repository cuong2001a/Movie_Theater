import { AuthFormValues } from "../models";
import axiosClient from "./axiosClient";
import { AUTH_URL } from "./constant";

export function login(data: AuthFormValues) {
  return axiosClient.post(AUTH_URL.LOGIN, data);
}

export function register(data: AuthFormValues) {
  return axiosClient.post(AUTH_URL.REGISTER, data);
}
