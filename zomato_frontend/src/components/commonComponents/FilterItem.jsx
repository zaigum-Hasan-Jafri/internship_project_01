import React from 'react'

const FilterItem = ({filter}) => {
    return (
        <div key={filter._id} className='filter-icon cur center'>
            {filter.filter_icon && filter.filter_icon}
            <div className="filter-title">
                {filter.title}
            </div>



        </div>
    )
}

export default FilterItem