import React, { useEffect, useState } from "react"
import "./App.css"
import "leaflet/dist/leaflet.css"
import Map from "./components/Map/Map"
import Header from "./components/Header/Header"
import InfoCategory from "./components/InfoCategory/InfoCategory"

const baseUrl = "https://eonet.gsfc.nasa.gov/api/v3"

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState("All")
  const [dataCategory, setDataCategory] = useState([])
  const [infoCategoryClose, setInfoCategoryClose] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      try {
        const categoryId = category
        const url =
          categoryId === "All" ? `${baseUrl}/events` : `${baseUrl}/categories/${categoryId}`

        const res = await fetch(url)
        const { events } = await res.json()
        setEventData(events)

        setInfoCategoryClose(true)
      } catch (err) {
        console.log(err)
        setError("Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [category])

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch(`${baseUrl}/categories`)
        const { categories } = await res.json()

        const cats = categories.map((c) => ({
          value: c.id.toString(),
          label: c.title,
          description: c.description,
        }))
        const catAll = [
          {
            value: "All",
            label: "All",
            description: "",
          },
        ]
        const newCats = catAll.concat(cats)
        setDataCategory(newCats)
      } catch (err) {
        console.log(err)
      }
    }

    fetchCategory()
  }, [])

  return (
    <div className="app">
      <Header
        category={category}
        setCategory={setCategory}
        dataCategory={dataCategory}
        loading={loading}
      />

      {error ? (
        error
      ) : (
        <>
          <InfoCategory
            eventData={eventData}
            category={category}
            dataCategory={dataCategory}
            setInfoCategoryClose={setInfoCategoryClose}
            infoCategoryClose={infoCategoryClose}
          />
          <Map eventData={eventData} />
        </>
      )}

      {loading && (
        <div className="loading">
          <div className="lds-dual-ring"></div>
        </div>
      )}
    </div>
  )
}

export default App
