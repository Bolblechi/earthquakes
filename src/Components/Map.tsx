import { useEffect, useRef, useState } from "react";
import axios, { AxiosResponse} from 'axios';
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import getEarthquakesInfo from "../api"

export default function MapComponent(){
  const [map, setMap] = useState<google.maps.Map>()
  const ref = useRef<HTMLDivElement>()
  const [response, setResponse] = useState<AxiosResponse>();
  const [markerCluster, setMarkerClusters] = useState<MarkerClusterer>();

  useEffect(()=>{
    if(ref.current && !map){
      setMap(new window.google.maps.Map(ref.current, {
        center: {lat: 4.4333479181711075, lng:-75.21505129646759},
        zoom: 2,
      }))
    }
  }, [map])

  useEffect(() => {
    if(!response && markerCluster){
      getEarthquakesInfo.then((response) => {
        setResponse(response);
      });
    }
    if(markerCluster && response){
      let markersNumber = response.data['features'].length
      markerCluster.clearMarkers();

      for (let i = 0; i < markersNumber; i++) {
        markerCluster.addMarker(new window.google.maps.Marker({
          position: {lat: response.data['features'][i].geometry.coordinates[1],
                     lng: response.data['features'][i].geometry.coordinates[0]}
        }))
      }
    }
  }, [markerCluster, response]);

  useEffect(() => {
    if(map && !markerCluster){
      setMarkerClusters(new MarkerClusterer({map, markers: [], }));
    }
  }, [map, markerCluster]);

  return (
    <>
      <div ref={ref as any} style={{height: "100%", width: "100%", minHeight:"700px"}} ></div>
    </>
  )
}
