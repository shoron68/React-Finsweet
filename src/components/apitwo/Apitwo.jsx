import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'
import "./apitwo.css"

const Apitwo = () => {
    let [info,setInfo]=useState([])
    let getData =()=>{
        axios.get("https://dummyjson.com/recipes").then((response)=>{
            setInfo (response.data.recipes)
        })
    }
    useEffect(()=>{
        getData()
    },[])


  return (
    <>
    <div className="api_main">
        <Container>
            <Row>
                    {info.map((items)=>(
                         <Col lg={4}>
                        <div className="pimage">
                            <img src={items.image} className='w-100' alt="" />
                            <h2>{items.name}</h2>
                            <h6>{items.ingredients}</h6>
                            <h5>{items.id}</h5>
                            <h5>{items.rating}</h5>
                            <h5>{items.reviewCount}</h5>
                        </div>
                        </Col>
                    ))}  
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Apitwo