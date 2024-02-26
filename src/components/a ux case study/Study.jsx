import React from 'react'
import "./study.css"
import { Col, Container, Row } from 'react-bootstrap'
import img from "../../assets/stdycover.png"

const Study = () => {
  return (
    <>
    <div className="study_main">
        <Container>
            <Row className='justify-content-center'>
                <Col lg={10}>
                <div className="body text-center">
                    <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
                </div>
                </Col>
                <Col lg={12}>
                    <img src={img} className='w-100' alt="" />
                </Col>
                <Col lg={8}>
                    <div className="btmm">
                    <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Study