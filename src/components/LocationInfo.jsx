import React from 'react'
import './LocationInfo.css'

const LocationInfo = ({location}) => {

   

  return (
    <article className='location-info'>
        <h2>{location?.name}</h2>
        <ul>
            <li><span className="bold">Type: </span> {location?.type}</li>
            <li><span className="bold">Dimension: </span> {location?.dimension}</li>
            <li><span className="bold">Population: </span> {location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo