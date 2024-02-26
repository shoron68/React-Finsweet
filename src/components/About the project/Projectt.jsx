import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from "../../assets/cover7.png"

const Projectt = () => {
  return (
    <div className="main">
        <Container>
            <Row>
                <Col lg={{span:8, offset:2}}>
                    <div className="body">
                    <h2>About the project</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <ul>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    </ul>
                    <img src={img} className='w-100' alt="" />
                    </div>

                </Col>
                <Col lg={{span:8, offset:2}}>
                    <div className="body">
                    <h2>How we do it</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <ul>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Projectt