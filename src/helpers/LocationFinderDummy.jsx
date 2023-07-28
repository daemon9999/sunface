import axios from "axios";
import { useMapEvents } from "react-leaflet";
import store from "src/store";
import { setLocation } from "src/store/optimization";

const LocationFinderDummy = () => {
  const getData = ({ lat, lng }) => {
    
    axios.post(
      `http://127.0.0.1:8000/api/predictView`,
      JSON.stringify({ location: [lat, lng] }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
     
        store.dispatch(setLocation(res.data));
      })
      .catch((err) => console.log(errj));
  };

  const map = useMapEvents({
    click(e) {
      getData(e.latlng);
    },
  });
  return null;
};

export default LocationFinderDummy;
