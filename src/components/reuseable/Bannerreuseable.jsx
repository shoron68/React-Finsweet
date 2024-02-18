import "./Bannerreuseable.css"
import bnrimg from "../../assets/banner.png"
import { Container,Row,Col } from "react-bootstrap"
import { FaArrowRightLong } from "react-icons/fa6";

const Bannerreuseable = ({title,para}) => {
  return (
    <>
    <div className="banner_main">
        <Container>
            <Row>
                <Col lg={5} col={12} sm={12} md={12}>
                    <div className="bnr_left">
                        <h1>{title}</h1>
                        <p>{para}</p>
                        <div className="bnr_btn">
                            <a href="#">View our work</a>
                            <a href="#">View Pricing <FaArrowRightLong /></a>
                        </div>
                    </div>
                </Col>
                <Col lg={{span:6, offset:1}} col={10} sm={10} md={10}>
                    <div className="bnr_right w-100">
                        <img src={bnrimg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Bannerreuseable