import React, { useEffect, useState } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import { unstable_concurrentAct } from "react-dom/test-utils";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const catId = category;

      const url =
        catId === "all"
          ? "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
          : `https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/${parseFloat(
              catId
            )}`;

      const res = await fetch(url);
      const { events } = await res.json();
      setEventData(events);

      setLoading(false);
    };

    fetchEvents();
  }, [category]);

  return (
    <div className="app">
      <Header category={category} setCategory={setCategory} />

      {!loading ? (
        <Map eventData={eventData} />
      ) : (
        <div className="loading">
          <div class="lds-dual-ring"></div>
        </div>
      )}
    </div>
  );
}

export default App;
