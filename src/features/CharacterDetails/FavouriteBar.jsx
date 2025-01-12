import React from "react"
import { useNavigate } from "react-router-dom"
import { addToFavourite } from "./detailsSlice"
import './style.css'

const FavouriteBar = ({ details, fav, setIsFav, id}) => {
    const navigate = useNavigate()

    const handleBackButton = () => navigate({ pathname: `/` }, { replace: false })

    const handleAddToFav = () => {
        addToFavourite(details, id)
        setIsFav(true)
    }

    return  (
    <div className="back-button-bar">
      <svg onClick={() => handleBackButton()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height={12} width={12}>
        <path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" data-name="4-Arrow Left" />
      </svg>
    <h4> {details.name} Details </h4>
    { fav  ? <button className="fav-button"> Favourite </button> 
          : <button className="addTo-fav-button" onClick={() => handleAddToFav()}> Add to Favourite </button>
    }
    </div>
    )

}

export default FavouriteBar