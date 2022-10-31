import React from 'react';
import RestCards from '../Cards/RestCards';
import useFetch from '../Hooks/useFetch';
// const Restaurant = require('../../Restaurant/Restaurants.json')


const Search = () => {
  // const [fdata,setFdata] = useState(Restaurant);
  const { data, loading, error } = useFetch("http://localhost:5000/hotel/allhotel");
  // console.log(fdata);
  return (
    <React.Fragment>
      <div className="container d-flex">
        <section className="item-section mt-4">
          <h3 style={{letterSpacing:"5px"}}>Delivery Welcome !</h3>
          <div className="row mt-2  " style={{boxSizing:'border-box',}}>
            <RestCards data={data} loading={loading} error={error} />
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default Search
