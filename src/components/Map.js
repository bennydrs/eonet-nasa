import React from "react";
import { Map as MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl:
    "https://i.pinimg.com/originals/25/62/aa/2562aacd1a4c2af60cce9629b1e05cf2.png",
  iconSize: [35, 35],
});

const Map = ({ center, zoom }) => {
  return (
    <div className="maps">
      <MapContainer center={[51.505, -0.09]} zoom={3} className="map">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]} icon={markerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
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
