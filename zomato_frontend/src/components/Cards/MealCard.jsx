import React /* { useEffect, useState } */ from 'react'
// import { Link } from 'react-router-dom'
import "./MealCard.css";
import { Card, Button } from 'react-bootstrap';
import { CartState } from '../ContextApi/Search';
const MealCard = ({ data, loading }) => {
  const { state: { cart }, dispatch } = CartState()
  /* const [cartvalue,setCartvalue] = useState(cart)
  useEffect(() => {
    const data = localStorage.getItem('CART');
    setCartvalue(JSON.parse(data));
  },[])
  useEffect(() => {
    localStorage.setItem('CART', JSON.stringify(cartvalue))
  })
  console.log(cart) */

  return (
    <React.Fragment>
      {
        loading ? ("Loading") : (data && data.map((value, index) => {
          const isVeg = (value.isVeg.toString() === "true") ? (
            <> {<i key={index} className='bi bi-check' style={{ fontSize: "34px", fontWeight: "200", paddingLeft: "0px", marginTop: '0px' }}></i>}
            </>
          ) : (<> {<i className='bi bi-x' style={{ fontSize: "34px", fontWeight: "200", paddingLeft: "0px", marginTop: '0px' }}></i>}
          </>)
          return (
            <div className='mContainer' key={index}>
              <Card style={{ width: '22rem', margin: "10px 0px 15px auto", background: "none", border: "none", }}  >
                <Card.Img variant="top" src='https://source.unsplash.com/1600x800/?pizza' alt="card-img" style={{ height: "16rem", borderRadius: "30px 30px 0px 0px", marginTop: "20px" }} />
                <div className="card-body cur bg-light">
                  <div className="upper-data d-flex justify-content-between align-items-center">
                    <h5 className='mt-2'>{value.itemName}</h5>
                    <span className='d-flex px-2 mcheck'>Veg:{isVeg}</span>
                  </div>
                  <div className="lower-data d-flex justify-content-between align-items-center">
                    <p className='mt-2'>{value.itemDescription}</p>
                    <span>₹{value.itemPrice} for one</span>
                  </div>
                  <div >
                    {cart.find(p => p._id === value._id) ? (<Button className="center bg-success text-light" style={{ borderRadius: "25px" }} onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: value })} >Added</Button>) : (<Button className="center text-dark" style={{ borderRadius: "25px", backgroundColor: 'transparent' }} onClick={() => dispatch({ type: "ADD_TO_CART", payload: value })} >Order</Button>)
                    }
                  </div>
                </div>
              </Card>
            </div>
          )
        }))
      }
    </React.Fragment >
  )
}

export default (MealCard)