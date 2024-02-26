import "./privecy.css"
import { Col, Container, Row } from 'react-bootstrap'

const Privecy = () => {
  return (
    <>
    <div className="main">
        <Container>
            <Row className="justify-content-center">
                <Col lg={6} xs={12} sm={12} md={12}>
                    <div className="upper text-center">
                        <h2>Privacy Policy</h2>
                        <p>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help you bring your </p>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={8} xs={12} sm={12} md={12}>
                    <div className="body">
                        <div className="section1">
                        <h3>Lorem ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="section2">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Privecy