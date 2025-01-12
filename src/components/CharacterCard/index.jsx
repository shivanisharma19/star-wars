import React from "react"
import './style.css'

const CharacterCard = ({ name, gender, planet}) => {
    return (
      <div className='card-table'>
        <h5> {name} </h5>
        <div className='card-table__details' >
          <p className='card-table__field'> Gender : {gender} </p>
          <p className='card-table__field'> Planet :  {planet}  </p>
        </div>
      </div>
    )
}

export default CharacterCard