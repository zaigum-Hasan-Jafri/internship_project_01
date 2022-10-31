import React from 'react';
import Card from 'react-bootstrap/Card';

import './RestCards.css'
const RestCards = ({ data, loading, error }) => {
  // console.log(data)
  return (
    <React.Fragment>
      {
        loading ? (<div style={{textAlign:'center', width:'100%'}}><div className="spinner-border" role="status"></div> still Loading...</div>) : (data && data.map((value,index) => {
          return (
            <>
              <Card style={{ width: '22rem', margin: "10px 0px 15px auto", background: "none", border: "none" }} key={index} >
                <Card.Img variant="top" src={value.thumb} alt="card-img" style={{ height: "16rem", borderRadius: "30px 30px 0px 0px", marginTop: "20px" }} />
                <div className="card-body cur bg-light">
                  <div className="upper-data d-flex justify-content-between align-items-center">
                    <h5 className='mt-2'>{value.name}</h5>
                    <span className='d-flex px-2'>{value.city}<i className='bi bi-star-fill' style={{ fontSize: "10px", paddingLeft: "15px", marginTop: '5px' }}></i></span>
                  </div>
                  <div className="lower-data d-flex justify-content-between align-items-center">
                    <h6 className='mt-2'>{value.city_name}</h6>
                    <span>₹{value.cost} for one</span>
                  </div>
                </div>
              </Card>
            </>
          )
        }))
      }
    </React.Fragment>
  )
}

export default React.memo(RestCards)
