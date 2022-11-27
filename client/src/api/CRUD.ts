import axiosClient from "./axiosClient";

export function apiGetAll(Url: string, params: any) {
  return axiosClient.get(Url, params);
}
