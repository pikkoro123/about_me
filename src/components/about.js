import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import Carousel from './carousel'
import Pic1 from './logo/html.png'
import Pic2 from './logo/js.png'
import Pic3 from './logo/bootstrap.png'
import Pic4 from './logo/mysql.png'
import Pic5 from './logo/node.png'
import Pic6 from './logo/css.png'
export default class Example extends React.Component {
  render() {
    return (
      
      <Container>
        <style>
          {
            `img {
              float: left;
              width: 33.3%;
              box-sizing: border-box;
              text-align: center;
              margin-bottom: 2%;
              }`
              
          }
        </style>
        {/* <Row> */}
          {/* <Carousel /> */}
        {/* </Row> */}

        <Row>
          <Col>ABOUT</Col>
        </Row>
        <Row>
          <Col>I'm Pollop Bunnak.</Col>
          {/* <Col>I graduated from King Mongkut's university of technology Thonburi(KMUTT) computer engineering</Col> */}
          {/* <Col>.col</Col> */}
          {/* <Col>.col</Col> */}
        </Row>
        <Row>
        <Col>I graduated from King Mongkut's university of technology Thonburi(KMUTT) computer engineering.</Col>
        </Row>
        <Row>
          <Col>
            SKILLSET
          </Col>
        </Row>
        <Row>
          <Col>
            TOOLBOX
          </Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">

              <img src={Pic1} alt={"Pic1"} />

              <h1>HTML5</h1>

          </Col>
          <Col xs="6" sm="4">
            <img src={Pic2} alt={"Pic2"} />
            <h1>JAVASCRIPT</h1>
          </Col>
          <Col xs="6" sm="4">
            <img src={Pic6} alt={"Pic6"} />
            <h1>CSS3</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">
            <img src={Pic3} alt={"Pic3"} />
            <h1>BOOTSTRAP</h1>
          </Col>
          <Col xs="6" sm="4">
            <img src={Pic4} alt={"Pic4"} />
            <h1>MySQL</h1>
          </Col>
          <Col xs="6" sm="4">
            <img src={Pic5} alt={"Pic5"} />
            <h1>Node.JS</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            EXPERIENCE
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Locus Telecommunication Inc., Ltd.</h1>
          </Col>
        </Row>
        {/* <Row>
          <Col xs="3">.col-3</Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="3">.col-3</Col>
        </Row>
        <Row>
          <Col xs="6">.col-6</Col>
          <Col xs="6">.col-6</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .col-sm-order-2 .col-sm-offset-2</Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>.col-sm-12 .col-md-6 .col-md-offset-3</Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm .col-sm-offset-1</Col>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm .col-sm-offset-1</Col>
        </Row> */}
      </Container>
    );
  }
}