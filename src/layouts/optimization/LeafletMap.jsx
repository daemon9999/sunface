import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import LocationFinderDummy from "src/helpers/LocationFinderDummy";
import fakeGeoJsonData from "src/constants/fakeGeoJsonData";
import "leaflet/dist/leaflet.css";
const LeafletMap = () => {
  
  
  function getColor(energy) {
    return energy > 80
      ? "#d73027"
      : energy > 60
      ? "#fc8d59"
      : energy > 40
      ? "#fee08b"
      : energy > 20
      ? "#d9ef8b"
      : "#91cf60";
  }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.energy),
      weight: 2,
      opacity: 1,
      color: "transparent",
    };
  }
  return (
    <div className="flex-auto p-5">
      <MapContainer
        id="map"
        center={[-74.006, 40.7128]}
        zoom={2}
        style={{ width: "100%", height: "500px" }}
      >
        <LocationFinderDummy />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <GeoJSON data={fakeGeoJsonData} style={style} />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
