import React from "react"
import './style.css'

const DetailsCard = ({details, planet}) => {
    return (
        <table className='details-table'>
        <tbody>
          <tr>
            <td className='details-table-field'>
              Name - 
            </td>
            <td className='details-table-value'>
              {details.name}
            </td>
          </tr>
          <tr>
            <td className='details-table-field'>
              Hair colour -
            </td>
            <td className='details-table-value'>
              {details.hair_color}
            </td>
          </tr>
          <tr>
            <td className='details-table-field'>
              Eye colour - 
            </td>
            <td className='details-table-value'>
              {details.eye_color}
            </td>
          </tr>
          <tr>
            <td className='details-table-field'>
              Gender - 
            </td>
            <td className='details-table-value'>
              {details.gender}
            </td>
          </tr>
          <tr>
            <td className='details-table-field'>
              Home planet - 
            </td>
            <td className='details-table-value'>
              {planet.name}
            </td>
          </tr>
      </tbody>
      </table>
    )

}

export default DetailsCard