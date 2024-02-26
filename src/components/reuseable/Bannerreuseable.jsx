import "./Bannerreuseable.css"
import { Link } from "react-router-dom";
import bnrimg from "../../assets/banner.png"
import { Container,Row,Col } from "react-bootstrap"
import { FaArrowRightLong } from "react-icons/fa6";

const Bannerreuseable = ({title,para}) => {
  return (
    <>
    <div className="banner_main">
        <Container>
            <Row>
                <Col lg={5} xs={12} sm={12} md={12}>
                    <div className="bnr_left">
                        <h1>{title}</h1>
                        <p>{para}</p>
                        <div className="bnr_btn">
                            <Link to="/protfolio">View our work</Link>
                            <Link to="/pricing">View Pricing <FaArrowRightLong/> </Link>
                        </div>
                    </div>
                </Col>
                <Col lg={{span:6, offset:1}} xs={12} sm={12} md={12}>
                    <div className="bnr_right ">
                        <img src={bnrimg} className="w-100" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Bannerreuseable