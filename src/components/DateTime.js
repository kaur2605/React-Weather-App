import React from "react"

const DateTime = () => {
  const date = new Date()
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div className="date-time">
      {`${date.toLocaleDateString(undefined, options)}  -  ${date.toLocaleTimeString()}`}
    </div>
  )
}

export default DateTime