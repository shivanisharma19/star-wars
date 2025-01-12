import { useEffect, useState } from "react"
import { fetchDetails } from "./detailsSlice"
import { isEmpty } from "lodash"

const useCharacterDetailsHook = ({id, setIsFav}) => {
      const [ details, setDetails ] = useState()


    useEffect(() => {
    const fetchDetailsResponse = async() => {
    try { 
        const favList = window.localStorage.getItem('starwars')
        const favListArr = JSON.parse(favList)
        if(!isEmpty(favListArr) && !isEmpty(favListArr.filter((fav) => fav.id === id))) { 
            setIsFav(true) 
        }
        const data = await fetchDetails(id)
        setDetails(data)
    }
    catch {
        console.log("There was an issue fetching the details")
        }
    }
    fetchDetailsResponse()
    }, [])

    return details
}

export default useCharacterDetailsHook
