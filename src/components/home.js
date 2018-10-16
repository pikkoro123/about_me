import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Carousel from './carousel'
// import Background from './picture/background.jpeg'
export default class Example extends React.Component {
  render() {
    return (
      <div>
        <style>
          {
            ` section {
              background-image: url("background.jpeg");
            }`
          }
        </style>
      
      <section className="banner" >
        <div className="banner_message">
        <h1>Thank You For Visiting</h1>
        </div>
        <div className="banner_image">
          {/* <img src={Background} alt={"man"} /> */}
        </div>
      </section>
      
      <Container>
        
        <Carousel />
      </Container>
      </div>
    );
  }
}