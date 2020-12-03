import React from "react";
import "./Map.css";
import { Map as MapContainer, TileLayer } from "react-leaflet";
import { showMarkers } from "../../util";

const Map = ({ eventData, center, zoom }) => {
  return (
    <div className="maps">
      <MapContainer center={center} zoom={zoom} className="map">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
        />
        {showMarkers(eventData)}
      </MapContainer>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 20.8628,
    lng: 30.2176,
  },
  zoom: 3,
};

export default Map;
