import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

const SearchBar = ({setDebouncedValue, setCount}) => {
  const navigate = useNavigate()
  const [searchVal, setSearchVal] = useState()

   const onChangeHandle = (e) => {
      setSearchVal(e.target.value)
      setCount(1)
   }
 
   React.useEffect(() => {
     const timeout = setTimeout(() => {
       setDebouncedValue(searchVal);
     }, 500)
     return () => clearTimeout(timeout);
   }, [searchVal, 500])

  return (
    <div className="search__container">
        <input 
          className="search-box"
          type='text' 
          placeholder="Search Name" 
          value={searchVal} 
          onChange={(e) => {onChangeHandle(e)}}
          size={15}
        />
        <div className="right-buttons">
            <button className="right-buttons__fav" onClick={() => navigate({pathname: '/fav'})}> Favourite </button>
        </div>
    </div>
  )
}

export default SearchBar