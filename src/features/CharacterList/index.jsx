import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { isEmpty } from "lodash"
import CharacterCard from "../../components/CharacterCard"
import { fetchList, fetchPlanets, maxCount } from "./listSlice"
import SearchBar from "../../components/SearchBar"
import Pagination from "../../components/Pagination"
import './style.css'

const CharacterList = () => {
    const navigate = useNavigate()
    const [list, setList] = useState()
    const [planet, setPlanet] = useState([])
    const [debouncedValue, setDebouncedValue] = React.useState()
    const [count, setCount] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
          const data = await fetchList(count, debouncedValue)
            setList(data)
        } catch (error) {
            console.error('Error fetching list:', error)
        }
    }
    fetchData()
  }, [count, debouncedValue])

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

    return (
        <><SearchBar setDebouncedValue={setDebouncedValue} setCount={setCount} />
        <div className="list_wrapper">
        {list ? list.map((ch, index) => (
          <div className='card' onClick={() => onClick((index + ((count-1)*10))+ 1)}> 
            <CharacterCard name={ch.name} gender={ch.gender} planet={planet[index]} />
          </div>
        )) : <p> loading the data</p>}
      </div><Pagination count={count} setCount={setCount} maxCount={maxCount} /></>
    )

}

export default CharacterList