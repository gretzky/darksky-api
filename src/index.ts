import axios, { AxiosRequestConfig } from "axios";
import { DarkSkyApi } from "./types";

const darkskyApi: DarkSkyApi = {
  getForecast: async ({ key, latitude, longitude, time, params }) => {
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
  },
};

export default darkskyApi;
