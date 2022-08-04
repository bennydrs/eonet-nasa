import { Marker, Popup } from "react-leaflet"
import L from "leaflet"
import moment from "moment"

export const showMarkers = (eventData) =>
  eventData.map((event) => {
    const icon = require(`./assets/${event.categories[0].title}.png`).default

    const markerIcon = new L.Icon({
      iconUrl: icon,
      iconSize: [35, 35],
    })

    let position = []
    if (event.geometry[0].coordinates.length === 2) {
      position = [event.geometry[0].coordinates[1], event.geometry[0].coordinates[0]]
    } else {
      event.geometry[0].coordinates[0].slice(0, 1).map((ev) => {
        return (position = [ev[1], ev[0]])
      })
    }

    return (
      <Marker position={position} icon={markerIcon} key={event.id}>
        <Popup>
          <h3>{event.title}</h3>
          <h4>{event.categories[0].title}</h4>
          <p>{moment(event.geometry[0].date).format("MMMM Do YYYY, h:mm:ss a")}</p>
        </Popup>
      </Marker>
    )
  })
