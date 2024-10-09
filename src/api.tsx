import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import {useState, useEffect} from "react";

// export default function Earthquakes() {
  const client = axios.create({
    baseURL: 'https://earthquake.usgs.gov',
  });
  const config: AxiosRequestConfig = {
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_USGS_API_KEY}`
    } as RawAxiosRequestHeaders,
  };
  const getEarthquakesInfo = client.get(`/earthquakes/feed/v1.0/summary/all_day.geojson`, config);

export default getEarthquakesInfo;
// };
