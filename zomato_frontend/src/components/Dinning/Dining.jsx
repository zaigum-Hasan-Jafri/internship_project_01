import React ,{useState} from 'react'
import Filter from '../commonComponents/Filter'
import RestCards from '../Cards/RestCards'

const Diningdata = require('../../Restaurant/Dining.json')
const Dining = () => {
  const [data]= useState(Diningdata)
  return (
    <>
    <div className="container">
      <Filter/>
    </div>
    <div className='container-fluid' style={{backgroundColor:"var(--bg-gray)"}}>
    <div className='container center'>
        <section>
          <h3>Dinning Welcome ! </h3>
          <div className="row mt-2">
            <RestCards data={data}/>
          </div>


        </section>
    </div>
    </div>
    </>
  )
}

export default Dining