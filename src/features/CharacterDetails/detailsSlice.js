import { getRequest } from "../../common/api"

export const fetchDetails = (id) => {
    return getRequest(`https://swapi.py4e.com/api/people/${id}`)
}

export const fetchFilmsAndStarships = async (list, prop) => {
    let data = await Promise.all(list[prop].map(async(url) => { 
       const response = await getRequest(url)
       return response
     }))
     return data
  }

export const fetchPlanet = (url) => {
  return getRequest(url)
}

const getInitialList = () => {
  const localFavList = window.localStorage.getItem('starwars')
      if(localFavList)
         return JSON.parse(localFavList)
      window.localStorage.setItem('starwars', JSON.stringify([]));
      return [];
 }

export const addToFavourite = (details, id) => {
  details['id'] = id
  const favItemArr = getInitialList()
  favItemArr.push(details)
  window.localStorage.setItem('starwars', JSON.stringify(favItemArr))
}