import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import LocationFinderDummy from "src/helpers/LocationFinderDummy";
import fakeGeoJsonData from "src/constants/fakeGeoJsonData";
import "leaflet/dist/leaflet.css";
import LineGraph from "src/components/optimization/leaflet/LineGraph";
const LeafletMap = () => {
  return (
    <div className="flex-auto p-5">
      <MapContainer
        id="map"
        center={[40.2055, 46.6706]}
        zoom={10}
        style={{ width: "100%", height: "500px" }}
      >
        <LocationFinderDummy />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>

      <LineGraph />
    </div>
  );
};

export default LeafletMap;
