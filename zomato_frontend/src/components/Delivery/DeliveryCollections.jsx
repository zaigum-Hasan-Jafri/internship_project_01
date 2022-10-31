import React from 'react'
import Search from '../Searches/Search'

const DeliveryCollections = () => {
  return (
    <div className='container-fluid' style={{backgroundColor:"var(--bg-gray)"}}>
    <div className='container center'>
        <Search/>
    </div>
    </div>
  )
}

export default React.memo(DeliveryCollections)