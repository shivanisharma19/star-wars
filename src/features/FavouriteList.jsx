import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { isEmpty } from "lodash"
import CharacterCard from "../components/CharacterCard"
import { fetchPlanets } from "../features/CharacterList/listSlice"
import "../features/CharacterList/style.css"

const FavouriteList = () => {

  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const [planet, setPlanet] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await window.localStorage.getItem('starwars')
          const data = await JSON.parse((response))
          setList(data)
        } catch (error) {
            console.error('Error fetching list:', error)
        }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if(!isEmpty(list)) {
      const fetchData = async () => {
        try {
            const data = await fetchPlanets(list, 'homeworld')
             setPlanet(data)
           } catch (error) {
               console.error('Error fetching list:', error)
           }
       }
       fetchData()
     }
  }, [list])
    
  const onClick = (id) => {
    navigate({ pathname: `/${id}`}, { replace: false})
  }

  const handleBackButton = () => navigate({ pathname: `/` }, { replace: false })

  return (
        !isLoading ? 
        ( list ?  
        <>
         <div className="back-button-bar">
          <svg onClick={() => handleBackButton()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height={12} width={12}>
            <path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" data-name="4-Arrow Left" />           
          </svg>
          <h4> Favourites </h4>
         </div>
         <div className="list_wrapper">
          {  list.map((ch, index) => (
            <div className='card' onClick={() => onClick(ch.id)}> 
              <CharacterCard name={ch.name} gender={ch.gender} planet={planet[index]} />
            </div>
            )) 
          } 
          </div> 
          </> : <p className="no-data"> Nothing added to favourite List</p>)
         : <p> loading the data</p>
          
    )
}

export default FavouriteList