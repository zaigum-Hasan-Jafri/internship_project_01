import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { ListGroup, Row, Col} from "react-bootstrap"
import { CartState } from '../ContextApi/Search'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { AuthContext } from '../ContextApi/AuthContext'

const Cart = () => {
    const { user } = useContext(AuthContext)
    const KEY = "pk_test_51Lc8OPCPmG4ksqcjH924anSMkG3pY1K4jC6B04yo8WrfND3IN1J202s16INmsB9IkNS33lWFHuEj8vJv0us3PptF00Edrbaem3"
    const { state: { cart }, dispatch, } = CartState()
    const [total, setTotal] = useState(0)
    const [stripePay, setStripePay] = useState(null)
    const onToken = (token) => {
        setStripePay(token)
    }
    // console.log(stripePay)
    useEffect((e) => {
        setTotal(cart.reduce((prev, curr) => prev + Number(curr.itemPrice) * curr.qty, 0));
    }, [cart])
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:5000/cart/checkout", {
                    tokenId: stripePay.id,
                    amount: total,
                    cart:cart,
                })
                console.log(res);
            } catch (error) {
                console.log(error)
            }
        };
        stripePay && makeRequest();
    }, [stripePay,cart,total])
    return (
        <>
            <div className="container-fluid" style={{ flexWrap: 'wrap' }}>
                <div className='' style={{ display: 'flex', width: '100%', maxWidth: 'auto', gap: '20px', margin: '5% 0%' }}>
                    <div style={{ flex: 1, position: 'sticky', height: 'max-content', top: '25px', backgroundColor: 'var(--cart-color)', borderRadius: '25px' }}>
                        <ListGroup>
                            <span className='text-light fs-2 fw-bold center'>Summary</span>
                            <span className='text-light fs-4 fw-normal center'>Subtotal {cart.length} items </span>
                            <hr className='mb-4 text-light' />
                            <span className='p-4 center' style={{ color: 'whitesmoke', backgroundColor: 'var(--cart-color)', fontSize: '20px', fontWeight: '300' }}>Total:₹ {total} /-</span><br /><hr className='text-light' />
                        </ListGroup>
                        <StripeCheckout
                            name="Z O M A T O"
                            image="https://source.unsplash.com/1600x800/?chicken-leg"
                            shippingAddress
                            billingAddress
                            description={`YOUR TOTAL IS ₹${total}`}
                            amount={total * 100}
                            stripeKey={KEY}
                            token={onToken}
                        >
                            <button style={{ outline: 'none', backgroundColor: 'var(--zomato-color)', textDecoration: 'overline', color: 'whitesmoke', padding: '10px 2px', fontWeight: '500', width: '100%' }} disabled={!user || total<=0}>Proceed To Check-Out</button>
                        </StripeCheckout>
                    </div>
                    {cart.length === 0 ? (<div style={{ flex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h3>Cart is Empty... <span><a href="/home">Continue Shopping</a></span></h3></div>) : (
                        < ListGroup style={{ flex: 3, backgroundColor: '' }}>
                            {cart.map((item, index) => {
                                // { console.log(`${item.itemName} with quantity ${item.qty} with stock ${item.inStock}`) }
                                return (
                                    <>
                                        <ListGroup.Item key={index}>{
                                            <Row className='d-flex justify-content-between align-items-center'>
                                                <Col sm={1} md={2}><span>{<img src='https://source.unsplash.com/80x80/?pizza' alt='error' style={{ objectFit: 'cover' }} />}</span></Col>
                                                <Col sm={1} md={2}><span >{item.itemName}</span></Col>
                                                <Col sm={1} md={2}><span>{item.restaurantName}</span></Col>
                                                <Col sm={1} md={1}><span>{item.itemPrice} /-</span></Col>
                                                <Col sm={1} md={1}>
                                                    <input defaultValue={item.qty < 0 ? item.qty = 0 : item.qty} type='number' style={{ width: '38px', display: 'flex', paddingLeft: '10px', border: 'none' }} onChange={(e) => dispatch({ type: 'CART_QTY', payload: { _id: item._id, qty: e.target.value }, })} />
                                                </Col>
                                                <Col sm={1} md={1}><button style={{ border: 'none', backgroundColor: 'transparent' }} onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}><i className='bi bi-trash fs-5'></i></button></Col>
                                            </Row>
                                        }</ListGroup.Item>
                                    </>
                                )
                            })}
                        </ListGroup>
                    )}
                </div >
            </div>
        </>
    )
}

export default Cart