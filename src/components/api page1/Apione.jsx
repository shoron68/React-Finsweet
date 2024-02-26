import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import "./apione.css"
import { Link } from 'react-router-dom'

const Apione = () => {
    let [info, setInfo]=useState([])
   let getData = ()=>{
    axios.get("https://dummyjson.com/products").then ((response)=>{
        setInfo(response.data.products)
        
    })
   }
   useEffect(()=>{
    getData()
   },[])
 
//    quantity
let [count, setCount]=useState(0)
    
   let handlIncrease = ()=>{
    setCount (count + 1)
   }
   let handldecrease =()=>{
    if (count > 0) {
        setCount (count - 1)
    }
   }
  return (
    <div className="porducts_main">
        <Container>
            <Row>
                
                    {info.map((items)=>(
                        <Col lg={4}>
                            <div className="apiimg">
                        <img src={items.thumbnail} className='w-100' alt="" />
                        </div>
                        <div className="infoo">
                        <h2>{items.title}</h2>
                        <h5>{items.description}</h5>
                        <h5> ${items.price}</h5>
                        <h5> *{items.rating}</h5>
                        <h5> Stock: {items.stock} Unit</h5>
                        </div>
                        {/* <div className="quantity">
                            <button onClick={handlIncrease} className='btn btn-primary'>+</button>
                            <h3 className='display'>{count}</h3>
                            <button onClick={handldecrease} className='btn btn-primary px-3'>-</button>
                        </div> */}
                        
                        </Col>
                        
                    ))}
                
            </Row>
            <Row className='justify-content-center'>
                <Col lg={3}>
                    <div className="btnn text-center">
                        <Link to="/apitwo" className='next_btn'>Next</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Apione