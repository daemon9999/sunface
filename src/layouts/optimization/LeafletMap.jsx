import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import LocationFinderDummy from "src/helpers/LocationFinderDummy";
import fakeGeoJsonData from "src/constants/fakeGeoJsonData";
import "leaflet/dist/leaflet.css";
import LineGraph from "src/components/optimization/leaflet/LineGraph";
import hours from "src/constants/hours";
import { useOptimization } from "src/utils/optimization";
import months from "src/constants/months";
import faker from "faker";
import useResponsive from "src/hooks/useResponsive";
const LeafletMap = () => {
  const {optimization} = useOptimization();
  const md = useResponsive('md')
  return (
    <div className="flex-auto p-5">
      <MapContainer
      zoomControl={false}
        id="map"
        center={[40.2055, 46.6706]}
        zoom={10}
        doubleClickZoom={false}
      scrollWheelZoom={false}
      tap={false} // Disable map panning on mobile devices
        style={{ width: "100%", height: "500px", zIndex: 20}}
      >
        <LocationFinderDummy />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
      <div className="mt-[200px] gap-x-[300px] grid grid-cols-1 lg:grid-cols-2">
        {Object?.values(optimization).length > 0 &&
          Object.values(optimization).map((arrs, key) => {
            let newData = []
            arrs[1].map((l,i) => {
              newData.push({power: parseFloat(l.toFixed(2)), hour: hours[i]})
            })
           
            return <LineGraph key={key}  data={newData} title={months[key]} xAxis={'hour'} yAxis={'power'}  />;
          })}
      </div>
    </div>
  );
};

export default LeafletMap;
