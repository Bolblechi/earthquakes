import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import {useState, useEffect} from "react";

export default function Earthquakes() {
  const [response, setResponse] = useState<AxiosResponse>();
  const client = axios.create({
    baseURL: 'https://earthquake.usgs.gov',
  });
  const config: AxiosRequestConfig = {
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_USGS_API_KEY}`
    } as RawAxiosRequestHeaders,
  };

  useEffect(() => {
    client.get(`/earthquakes/feed/v1.0/summary/all_day.geojson`, config).then((response) => {
      setResponse(response.data);
    });
  }, []);

  return (
    response
  );
};
