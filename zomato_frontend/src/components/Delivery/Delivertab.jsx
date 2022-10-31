import React from 'react'
import Filter from '../commonComponents/Filter'
import DeliveryCollections from './DeliveryCollections'

const Delivertab = () => {
  return (
    <div>
      <div className='container'>
        <Filter />
      </div>
      <DeliveryCollections/>
    </div>
  )
}

export default React.memo(Delivertab)