import { Container,Row,Col,Button } from "react-bootstrap"
import styled from "styled-components"
import '../assets/font/font.css'
import icl from "../assets/im1.jpg"
import icc from "../assets/icon_card_center.png"
import icr from "../assets/im2.jpg"
const ServicesWrapper=styled.div`
  font-family:'OpenSansBold';
  .slogan{
    font-weight:bold;
    color:#4a657d;
  }
  .text{
    color:#4a657d;
  }
  .card_left,.card_center,.card_right{
    padding-top: 4dvh;
    padding-bottom: 4dvh;
    padding-left: 1dvw;
    padding-right: 1dvw;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
  .card_left,.card_right{
    background-color:#edeff2;
    img{
      width:400px;
    }
  }
  .card_center{
    background-color:#1f87e4;
    img{
      width:100px;
    }
  }
`
export default function Services(){        
        return(<ServicesWrapper><Container>
          <Row>
            <Col className="text-center">
              <h3 className="slogan">{'надежное финансирование для вашего бизнеса'.toUpperCase()}</h3>
              <br />
              <p className="text">
                Компания "Капитал Плюс" поможет Вам в оформлении кредитов на бизнес!
                Наша компания работает по всем сферам кредитования на бизнес цели!
              </p>
            </Col>
          </Row>
        <Row>
          <Col md={4} sm={12} className='text-center card_left'>
            <img className="img-fluid" src={icl} alt="Бизнес-планирование, стратегия и исполнение" />
          </Col>
          <Col md={4} sm={12} className='text-center card_center'>
            <img className="img-fluid" src={icc} alt="финансовые прогнозы и анализ" />
          </Col>
          <Col md={4} sm={12} className='text-center card_right'>
            <img className="img-fluid" src={icr} alt="международные деловые возможности" />
          </Col>
        </Row>
        </Container></ServicesWrapper>)}