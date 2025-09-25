import { useState,useEffect } from "react"
import { Container,Col,Row,Nav,Navbar,Button } from "react-bootstrap"
import styled from "styled-components"
import '../assets/font/font.css'
import tel from '../assets/tel.png'
import mail from '../assets/mail.jpg'
import inst from '../assets/inst.png'
import wats from '../assets/wats.png'
const StyledNavLink = styled(Nav.Link)`
  color:#4a657d;
  font-size:11pt;
  transition: all 0.3s ease;

  &:hover {background-color: #4a657d;
    color: #ffffff !important;
    cursor: pointer;
  }
`
const ContackUs=styled(Button)`
    &:hover{background-color:#12ab12 !important; color:#fff;}
    border-radius:none;
    border:none;
    color:#fff;
    @media (max-width: 842px) {
        font-size:9pt;
    }
`
const WrapContainer=styled(Container)`
    background-color:#4a657d;
    font-family:'OpenSansBold';
    color:#fff;
    font-weight: bold;
    img{
        width:20px;
        margin-top:-5px;
    }
    span{
        font-size:12pt;
    }
    @media (max-width: 1198px) {
        span{
            font-size:9pt;
        }
        img{
            width:15px;
            margin-top:-3px;
        }
    }
    .wrap_contact_us{
        display:flex;
        justify-content:flex-end;
    }
    @media (max-width: 1020px) {
    .wrap_contact_us{
        display:flex;
        justify-content:center;
        margin-top:5px;
        }
        
    }
    .nav_a{color:white;
        &:hover{
            color:yellow;
        }
    }
`
const WrapMenu=styled.div`
    font-family:'OpenSansBold';
    .logo{color:#4a657d;
            font-size:15pt;
            line-height:1.5rem;
    }
    @media (max-width:994px) {
        .nav-link{
            font-size:8pt;
        }
        .logo{
            font-size:12pt;
        }
    }
    @media (max-width: 786px) {
    .navbar-nav{
    display:flex !important;
    flex-direction:column !important;
    justify-content:center;
    align-items:center;
    }
    .logo{
        display:flex;
        justify-content:center;
    }
    }
`
export default function Header({setShowModal}){
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1020);

    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 1020);
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return(
        <>
        <WrapContainer fluid>
        <Row className='pb-3 pt-3 ps-5 align-items-center'>
        <Col md={8} sm={10}>
            <a href="tel:+77786218134" className="nav_a" onClick={() => window.fbq?.('track', 'Contact')}>
  		<img className='ms-3' src={tel} />
  		<span className="mx-3">+7 778 621 8134</span>
	    </a>
            {!isMobile ? <span>|</span> : <br />}
            <a href="mailto:k.zh.80@bk.ru" className="nav_a"><img className='ms-3' src={mail}/>
            <span className="mx-3">k.zh.80@bk.ru</span></a>
            {!isMobile ? <span>|</span> : <br />}
            
            <a href="https://www.instagram.com/biznes_kredit_mbba?igsh=MW1hNmtlZm9wYjZrcw==" target="_blank" className="nav_a">
                <img className='ms-3' src={inst}/>
                <span className="mx-3">biznes_kredit_mbba</span>
            </a>
            {!isMobile ? <span>|</span> : <br />}
            <a href="https://wa.me/77784985631?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82..." target="_blank" className="nav_a"onClick={() => window.fbq?.('track', 'Contact')}>
                <img className='ms-3' src={wats}/>
                <span className="mx-3">+7 778 498 5631</span>
            </a>
        </Col>
        <Col md={4} sm={2} className="wrap_contact_us">
            <ContackUs
  className='btn-info me-5'
  onClick={() => {
    if (window.fbq) {
      window.fbq('track', 'Contact');
    }
    setShowModal(true);
  }}
>
  СВЯЖИТЕСЬ С НАМИ
</ContackUs>
        </Col>
        </Row>
        </WrapContainer>

        <WrapMenu>
        <Container>
        <Row className='pb-3 pt-3 align-items-center'>
            <Col sm={12} md={2} className="logo">
            {/*!isMobile ? <span>ТОО Капитал<br/>плюс</span> : <span>ТОО Капитал плюс</span>*/}
            <span>ТОО Капитал плюс</span>
            </Col>
            <Col sm={12} md={{span:8,offset:2}} className={(!isMobile)?"d-flex justify-content-end":"d-flex justify-content-center"}>
            <Navbar bg="light">
                <Nav>
                    <StyledNavLink href="#about" className='px-4'>{'О нас'.toUpperCase()}</StyledNavLink>
                    <StyledNavLink href="#services" className='px-4'>{'Наши услуги'.toUpperCase()}</StyledNavLink>
                    <StyledNavLink href="#present" className='px-4'>{'Презентация'.toUpperCase()}</StyledNavLink>
                    <StyledNavLink href="#contacts" className='px-4'>{'Контакты'.toUpperCase()}</StyledNavLink>
                </Nav>
            </Navbar>
            </Col>            
        </Row>
        </Container>
        </WrapMenu>
        </>)}