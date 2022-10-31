/* import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { CartState } from '../ContextApi/Search';
// import useFetch from '../Hooks/useFetch';

const Sort = ({ data, loading}) => {
    const { productState, productDispatch } = CartState();
    console.log(productState.sort);


    return (
        <div container>
            <Form.Check
                inline label="Ascending" name="group1" type="radio"
                onChange={()=>{
                    productDispatch({type:"SORT_BY_PRICE",payload:"lowtoHigh"})
                }}
                checked={productState.sort === "lowtoHigh"?true:false}
            />
            <Form.Check
                inline label="Decending" name="group1" type="radio"
                onChange={()=>{
                    productDispatch({type:"SORT_BY_PRICE",payload:"hightoLow"})
                }}
                checked={productState.sort === "hightoLow"?true:false}
            />
        </div>
    )
}

export default React.memo(Sort) */