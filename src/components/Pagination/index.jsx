import React from "react";
import './style.css'

const Pagination = ({count, setCount, maxCount}) => {
    const onClickHandle = (action) => {
        setCount((prevCount) => prevCount + (action === 'next' ? 1 : -1));
    }
    return  (
        <div className="pagination">
             <button onClick={() => onClickHandle('prev')} hidden={count <= 1 ? true : false}>prev</button> 
              <p className="page-count">{count}</p>
              <button onClick={() => onClickHandle('next')} hidden={count >= maxCount ? true : false}>next</button>
        </div>
    )
}

export default Pagination