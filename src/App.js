import React, { useEffect, useState } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import Map from "./components/Map";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(eventData);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8"
      );
      const { events } = await res.json();
      setEventData(events);

      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div className="app">
      {!loading ? <Map eventData={eventData} /> : <h1>loading...</h1>}
    </div>
  );
}

export default App;
