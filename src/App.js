import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class App extends Component{
  render(){
    return(
      <div>
        <Container>
          <Row>
            <Col sm={4}>
              a
            </Col>
            <Col sm={4}>
              a
            </Col>
            <Col sm={4}>
              a
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}