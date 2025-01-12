import { getRequest } from "../../common/api.js"

export let maxCount

export const fetchList = async (page, searchParam) => {
  let url = 'https://swapi.py4e.com/api/people/';

  const queryParams = [];
  if (searchParam) queryParams.push(`search=${searchParam}`);
  if (page) queryParams.push(`page=${page}`);
  
  if (queryParams.length) {
    url += `?${queryParams.join('&')}`;
  }
  const data = await getRequest(url);

  maxCount = Math.ceil(data.count / 10);
  return data.results
}


export const fetchPlanets = async (list, prop) => {
   let data = await Promise.all(list.map(async(character) => { 
      const response = await getRequest(character[prop])
      return response.name
    }))
    return data
  }
