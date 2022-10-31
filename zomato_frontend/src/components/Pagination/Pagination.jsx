import React from 'react'

const Pagination = ({ perPage, totalData, paginate }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalData / perPage); i++) {
        pageNumber.push(i)
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(number => (
                    <li key={number}>
                        <button  className='page-link' onClick={()=>paginate(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination