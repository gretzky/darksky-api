import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { DarkSkyRequestParams, DarkSkyResponse } from "./types";

const getForecast = async ({
  key,
  latitude,
  longitude,
  time,
  params,
}: DarkSkyRequestParams): Promise<AxiosResponse<DarkSkyResponse>> => {
  const payload: AxiosRequestConfig = {
    method: "get",
    url: time
      ? `https://api.darksky.net/forecast/${key}/${latitude},${longitude},${time}`
      : `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`,
  };

  const requestPayload: AxiosRequestConfig = params
    ? { ...payload, params }
    : payload;

  return axios(requestPayload);
};

export default getForecast;
