import React, { useEffect, useState } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import InfoCategory from "./components/InfoCategory/InfoCategory";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("all");
  const [dataCategory, setDataCategory] = useState([]);
  const [infoCategoryClose, setInfoCategoryClose] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const catId = category;

      const url =
        catId === "All"
          ? "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
          : `https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/${parseFloat(
              catId
            )}`;

      const res = await fetch(url);
      const { events } = await res.json();
      setEventData(events);

      setLoading(false);
      setInfoCategoryClose(true);
    };

    fetchEvents();
  }, [category]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories"
      );
      const { categories } = await res.json();
      const cats = categories.map((c) => ({
        value: c.id.toString(),
        label: c.title,
        description: c.description,
      }));
      const catAll = [
        {
          value: "All",
          label: "All",
          description: "",
        },
      ];
      const newCats = catAll.concat(cats);
      setDataCategory(newCats);
    };

    fetchCategory();
  }, []);

  return (
    <div className="app">
      <Header
        category={category}
        setCategory={setCategory}
        dataCategory={dataCategory}
      />
      {!loading ? (
        <>
          {infoCategoryClose ? (
            <InfoCategory
              eventData={eventData}
              category={category}
              dataCategory={dataCategory}
              setInfoCategoryClose={setInfoCategoryClose}
            />
          ) : null}
          <Map eventData={eventData} />
        </>
      ) : (
        <div className="loading">
          <div className="lds-dual-ring"></div>
        </div>
      )}
    </div>
  );
}

export default App;
