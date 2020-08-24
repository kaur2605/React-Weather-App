import React, { useContext } from "react"

import Context from "../Context"
import propsTypes from "prop-types";
import Weather from "./Weather"

const WeatherData = () => {
  const { weather, city } = useContext(Context)
  const { temp, humidity, pressure } = weather
  return (
    <Weather temp={temp} humidity={humidity} pressure={pressure} city={city} />
  )
}

export default WeatherData

WeatherData.propsTypes = {
  temp: propsTypes.number.isRequired,
  humidity: propsTypes.number.isRequired,
  pressure: propsTypes.number.isRequired,
  city: propsTypes.string
}