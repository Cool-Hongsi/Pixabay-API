import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';

const MyCollection = ({ myCollection }) => {
    return(
        <div>
            <Container>
                <Row>
                    {myCollection.map((el, index) => {
                        return(
                            <Col sm={4} key={index}>
                                <div className="mycollection-container">
                                    <img src={el.url} className="pixabayImg" alt={index} />
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default MyCollection;