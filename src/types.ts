export enum AvailableLanguages {
  ar = "ar",
  az = "az",
  be = "be",
  bg = "bg",
  bn = "bs",
  bs = "bs",
  ca = "ca",
  cs = "cs",
  da = "da",
  de = "de",
  el = "el",
  en = "en",
  eo = "eo",
  es = "es",
  et = "et",
  fi = "fi",
  fr = "fr",
  he = "he",
  hi = "hi",
  hr = "hr",
  hu = "hu",
  id = "id",
  is = "is",
  it = "it",
  ja = "ja",
  ka = "ka",
  kn = "kn",
  ko = "ko",
  kw = "kw",
  lv = "lv",
  ml = "ml",
  mr = "mr",
  nb = "nb",
  nl = "nl",
  no = "no",
  pa = "pa",
  pl = "pl",
  pt = "pt",
  ro = "ro",
  ru = "ru",
  sk = "sk",
  sl = "sl",
  sr = "sr",
  sv = "sv",
  ta = "ta",
  te = "te",
  tet = "tet",
  tr = "tr",
  uk = "uk",
  ur = "ur",
  pig = "x-pig-latin",
  zh = "zh",
  zhtw = "zh-tw",
}

export enum Units {
  auto = "auto",
  ca = "ca",
  uk2 = "uk2",
  us = "us",
  si = "si",
}

export type Nullable<T> = null | undefined | T;

export type Timestamp = Date | string | number;

export interface DarkSkyRequestParams {
  key: string;
  latitude: number | string;
  longitude: number | string;
  time?: Timestamp;
  params?: {
    exclude?: string[];
    lang?: keyof typeof AvailableLanguages;
    units?: keyof typeof Units;
    extend?: "hourly";
  };
}

export type Precipitation = "rain" | "snow" | "sleet";

export interface DarkSkyDataPoint {
  apparentTemperature?: Nullable<number>;
  apparentTemperatureHigh?: Nullable<number>;
  apparentTemperatureHighTime?: Nullable<Timestamp>;
  apparentTemperatureLow?: Nullable<number>;
  apparentTemperatureLowTime?: Nullable<Timestamp>;
  apparentTemperatureMax?: Nullable<number>;
  apparentTemperatureMaxTime?: Nullable<Timestamp>;
  apparentTemperatureMin?: Nullable<number>;
  apparentTemperatureMinTime?: Nullable<Timestamp>;
  cloudCover?: Nullable<number>;
  dewPoint?: Nullable<number>;
  humidity?: Nullable<number>;
  icon?: Nullable<string>;
  moonPhase?: Nullable<number>;
  nearestStormBearing?: Nullable<number>;
  nearestStormDistance?: Nullable<number>;
  ozone?: Nullable<number>;
  precipAccumulation?: Nullable<number>;
  precipIntensity?: Nullable<number>;
  precipIntensityError?: Nullable<number>;
  precipIntensityMax?: Nullable<number>;
  precipIntensityMaxTime?: Nullable<Date>;
  precipProbability?: Nullable<number>;
  precipType?: Nullable<Precipitation>;
  pressure?: Nullable<number>;
  summary?: Nullable<string>;
  sunriseTime?: Nullable<Timestamp>;
  sunsetTime?: Nullable<Timestamp>;
  temperature?: Nullable<number>;
  temperatureHigh?: Nullable<number>;
  temperatureHighTime?: Nullable<Timestamp>;
  temperatureLow?: Nullable<number>;
  temperatureLowTime?: Nullable<Timestamp>;
  temperatureMax?: Nullable<number>;
  temperatureMaxTime?: Nullable<Timestamp>;
  temperatureMin?: Nullable<number>;
  temperatureMinTime?: Nullable<Timestamp>;
  time: Timestamp;
  uvIndex?: Nullable<number>;
  uvIndexTime?: Nullable<Timestamp>;
  windBearing?: Nullable<number>;
  windGust?: Nullable<number>;
  windGustTime?: Nullable<Timestamp>;
  windSpeed?: Nullable<number>;
}

export interface DarkSkyDataBlock {
  data: DarkSkyDataPoint[];
  summary?: Nullable<string>;
  icon?: Nullable<string>;
}

export interface Alert {
  description: string;
  expires: Timestamp;
  regions: string[];
  severity: "advisory" | "watch" | "warning";
  time: Timestamp;
  title: string;
  uri: string;
}

export interface Flags {
  nearestStation: number;
  sources: number[] | string[];
  units: keyof typeof Units;
  darkskyUnavailable?: Nullable<boolean>;
}

export interface DarkSkyResponse {
  latitude: number | string;
  longitude: number | string;
  timezone: string;
  offset?: number | string;
  currently?: Nullable<DarkSkyDataBlock>;
  daily?: Nullable<DarkSkyDataBlock>;
  minutely?: Nullable<DarkSkyDataBlock>;
  hourly?: Nullable<DarkSkyDataBlock>;
  alerts?: Nullable<Alert[]>;
  flags?: Nullable<Flags>;
}
