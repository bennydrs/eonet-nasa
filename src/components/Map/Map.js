import React from "react";
import "./Map.css";
import { Map as MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import fire from "../../assets/fire.png";
import moment from "moment";

const markerIcon = new L.Icon({
  iconUrl: fire,
  iconSize: [35, 35],
});

const Map = ({ eventData, center, zoom }) => {
  const markers = eventData.map((event) => {
    let position = [];
    if (event.geometries[0].coordinates.length === 2) {
      position = [
        event.geometries[0].coordinates[1],
        event.geometries[0].coordinates[0],
      ];
    } else {
      event.geometries[0].coordinates[0].slice(0, 1).map((ev) => {
        position = [ev[1], ev[0]];
      });
    }
    // console.log(position);
    return (
      <Marker position={position} icon={markerIcon}>
        <Popup>
          <h3>{event.title}</h3>
          <p>
            {moment(event.geometries[0].date).format("MMMM Do YYYY, h:mm:ss a")}
          </p>
        </Popup>
      </Marker>
    );
  });

  return (
    <div className="maps">
      <MapContainer center={center} zoom={zoom} className="map">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
        />
        {markers}
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
