import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import img from '../assets/bg_jumbotron.jpg'
import '../assets/font/font.css'
import styled from 'styled-components'
const ParallaxStyled=styled(Parallax)`
  font-family:'OpenSansBold';
  h3{
    font-weight:bold;
  }
`
const Jumbotron = () => {
  return (
    <ParallaxStyled bgImage={img} strength={200}>
        <Container className='my-5 pt-5'>
        <Row>
            <Col className="text-center text-light">
              <h3>{'почему выбирают нас'.toUpperCase()}</h3>
              <br />
              <p>
              НАС ВЫБИРАЮТ ПОСКОЛЬКУ НАША КОМПАНИЯ РАБОТАЕТ БЕЗ ПРЕДОПЛАТ,<br/>
              ОПЛАТА ПРОИЗВОДИТЬСЯ ПОСЛЕ ВЫПОЛНЕНИЯ РАБОТЫ
              </p>
            </Col>
          </Row>
          <Row className='text-center text-light my-5 pb-5'>
            <Col>
              <h1>7 лет</h1>
              <p>{'успешно финансируем клиентов'.toUpperCase()}</p>
            </Col>
            <Col>
              <h1>более 200</h1>
              <p>{'счастливых клиентов'.toUpperCase()}</p>
            </Col>
          </Row>
        </Container>
    </ParallaxStyled>
  );
};

export default Jumbotron;