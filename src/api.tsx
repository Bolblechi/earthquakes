import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import {useState, useEffect} from "react";

  const client = axios.create({
    baseURL: 'https://earthquake.usgs.gov',
  });
  const getEarthquakesInfo = client.get(`/earthquakes/feed/v1.0/summary/all_day.geojson`);

export default getEarthquakesInfo;
// };
