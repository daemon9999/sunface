import axios from "axios";
import { useState } from "react";
import { useMapEvents } from "react-leaflet";

const LocationFinderDummy = () => {
  const getData = ({ lat, lng }) => {
    axios
      .post(`http://127.0.0.1:8000/api/predictView`, 
        JSON.stringify({location: [39.05, 46.5, 3124.0]}),{
        headers: {
            'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const map = useMapEvents({
    click(e) {
      getData(e.latlng);
    },
  });
  return null;
};

export default LocationFinderDummy;
