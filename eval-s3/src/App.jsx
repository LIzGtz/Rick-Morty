import { useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import LocationInfo from './components/LocationInfo'
import CardResident from './components/CardResident'
import { useEffect } from 'react'
import axios from 'axios'

function App() {

  const [location, setLocation] = useState()
  const [searchInput, setsearchInput] = useState('')

  useEffect(() => {
    let numberLocation = 0;
    if (searchInput == '') {
      numberLocation = Math.floor(Math.random() * (126 - 1 ) + 1 )
    } else {
      numberLocation = parseInt(searchInput)
    }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [searchInput])


  //Busqueda de Location 

  // const location = useFetch(URL)

  const handleSubmit = e => {
    e.preventDefault()

    setsearchInput(e.target.search.value)

  }

  console.log(searchInput)

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <form onSubmit={handleSubmit}>
        <input id='search' name='search' type="text" />
        <button type='submit'>Search</button>
      </form>
      <LocationInfo location={location} />
      <div>
        {
          location?.residents?.map(url => (
            <CardResident
              key={url}
              url={url}
            />
          ))
        }
      </div>

    </div>
  )
}

export default App
