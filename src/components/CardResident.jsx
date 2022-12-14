import React from 'react'
import useFetch from '../hooks/useFetch'
import './CardResident.css'

const CardResident = ({ url }) => {

    const resident = useFetch(url)

    console.log(resident)

    return (
        <article className='card-resident'>
            <header>
                <img src={resident?.image} alt={`image of ${resident?.name}`} />
                <div>
                    <div className='circle'></div>
                    <span>{resident?.status}</span>
                </div>
            </header>
            <div>
                <h3>{resident?.name}</h3>
                <ul>
                    <li>
                        <span>Species: </span>
                        {resident?.species}
                    </li>
                    <li>
                        <span>Origin: </span>
                        {resident?.origin.name}
                    </li>
                    <li>
                        <span>Episodes where appear: </span>
                        {resident?.episode.length}
                    </li>
                </ul>
            </div>
        </article>
    )
}

export default CardResident