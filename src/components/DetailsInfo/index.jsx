import React from "react"
import { isEmpty } from "lodash"
import './style.css'

const DetailsInfo = ({header, values}) => {
    return (
        <table className='details-info-table'>
        <thead>
            <tr>
             <th>
                {header}
             </th>
            </tr>
        </thead>
        <tbody>
        { !isEmpty(values) ? values?.map((val) => 
          <tr>
            <td className='details-info-table-value'>
              {val.name ?? val.title}
            </td>
          </tr>
        ) : 
          <tr>
            <td> No Data Available </td>
          </tr>
        }
      </tbody>
      </table>
    )

}

export default DetailsInfo