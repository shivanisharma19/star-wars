import React, { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import DetailsCard from "../../components/DetailsCard"
import DetailsInfo from "../../components/DetailsInfo"
import { fetchFilmsAndStarships } from "./detailsSlice"
import { isEmpty } from "lodash"
import { fetchPlanet } from "../CharacterDetails/detailsSlice"
import useCharacterDetailsHook from './useCharacterDetailsHook'
import './style.css'
import FavouritePage from "./FavouriteBar"

const CharacterDetails = () => {
    const {id} = useParams()
    const [ isFav, setIsFav ] = useState(false)
    const details = useCharacterDetailsHook({id, setIsFav})
    const [ charFilms, setCharFilms ] = useState([])
    const [ charStarships, setCharStarships] = useState([])
    const [ charPlanet, setCharPlanet] = useState()
    const [ isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      console.log(details)
      if(!isEmpty(details)) {
        const fetchData = async () => {
          try {
              const planetData = await fetchPlanet(details.homeworld)
              const filmData = await fetchFilmsAndStarships(details, 'films')
              const starshipData = await fetchFilmsAndStarships(details, 'starships')
              setCharPlanet(planetData)
              setCharFilms(filmData)
              setCharStarships(starshipData)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
            setIsLoading(false)
        }
        fetchData()
      }
     }, [details])

    return  (
    <>
      { !(isLoading)  ? 
      <>
        <FavouritePage details={details} fav={isFav} setIsFav={setIsFav} id={id} />
        <DetailsCard details={details} planet={charPlanet} />
        <DetailsInfo header='Films' values={charFilms} />
        <DetailsInfo header='Starships' values={charStarships} />
      </> : <p> loading the data... </p>
      }
    </>
    )
}

export default CharacterDetails