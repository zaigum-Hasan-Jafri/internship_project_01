import React from 'react'
import '../common/Filter.css'
const Filter = () => {
    const filterArray =[
        {
            _id:1,
            filter_icon:<i className='bi bi-sliders2'></i>,
            title:"Filters"

        },
        {
            _id:2,
            title:"Rating 4+"
            
        },
        {
            _id:3,
            title:"Fresh"
        },
        {
            _id:4,
            title:"Hygienic"
        },
        {
            _id:5,
            filter_icon:<i className='bi bi-funnel-fill'></i>,
            title:"Pure Veg"
        },
    ]
  return (
    <div className='filters center'>

        {filterArray && filterArray.map((filter)=>
        {
            return <div key={filter._id} className='filter-icon cur center'>
                {filter.filter_icon && filter.filter_icon}
                <div className="filter-title">
                    {filter.title}
                </div>
            </div>
        }
        )}
        
    </div>
  )
}

export default Filter