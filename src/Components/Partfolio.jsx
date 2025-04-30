import { Container,Row,Col } from "react-bootstrap"
import '../assets/font/font.css'
import rectVideo01 from '../assets/recl_vid_01.mp4'
import rectVideo02 from '../assets/recl_vid_02.mp4'
import rectVideo03 from '../assets/recl_vid_03.mp4'
import rectVideo04 from '../assets/recl_vid_04.mp4'
import rectVideo05 from '../assets/recl_vid_05.mp4'
import styled from 'styled-components'
const PartfolioWrapper=styled.section`
  font-family:'OpenSansBold';
  .slogan{
    font-weight:bold;
    color:#4a657d;
  }
  .text,.text_video{
    color:#4a657d;
  }
  .col_video_one{
    display:flex;
    justify-content: flex-end;
  }
  .col_video_two{
    display:flex;
    justify-content: flex-start;
  }
  .col_video_center{
    display:flex;
    justify-content: center;
  }
  @media(max-width:768px){
    .col_video{
      display:flex;
      justify-content: center;
    }
  }
  `
export default function Partfolio(){
return(<PartfolioWrapper id="present"><Container className="my-5">
<Row>
  <Col className="text-center">
    <h3 className="slogan">{'Ваш надежный партнер в кредитовании бизнеса: от документации до получения средств'.toUpperCase()}</h3>
    <br/>
  </Col>
</Row>
<Row>
  <Col sm={12} md={6} className="col_video col_video_one">
    <video width="300" controls>
      <source src={rectVideo01} type="video/mp4" />
      Ваш браузер не поддерживает видео тег.
    </video></Col>
    <Col sm={12} md={6} className="col_video col_video_two">
    <video width="300" controls>
      <source src={rectVideo02} type="video/mp4" />
      Ваш браузер не поддерживает видео тег.
    </video></Col>
</Row>
<Row>
<Col sm={12} md={6} className="col_video col_video_one">
    <video width="300" controls>
      <source src={rectVideo03} type="video/mp4" />
      Ваш браузер не поддерживает видео тег.
    </video></Col>
  <Col sm={12} md={6} className="col_video col_video_two">
    <video width="300" controls>
      <source src={rectVideo04} type="video/mp4" />
      Ваш браузер не поддерживает видео тег.
    </video></Col>
</Row>
<Row>
    <Col sm={12} className="col_video col_video_center">
    <video width="300" controls>
      <source src={rectVideo05} type="video/mp4" />
      Ваш браузер не поддерживает видео тег.
    </video></Col>
</Row>
</Container></PartfolioWrapper>)}