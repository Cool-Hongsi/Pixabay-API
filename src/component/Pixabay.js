import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './style.scss';

export default class Pixabay extends Component{

    render(){

        const { pixabayList, onSelectedPicture } = this.props;
        // pixabayList came from pixabayReducer
        // onSelectedPicture is associated with myCollectionReducer

        return(
            <div>
                <Container>
                    <Row>
                        {pixabayList.pixabayList.hits.map((el, index) => {
                            return(
                                <Col sm={4} key={index}>
                                    <div className="pixabayImg-container">
                                        <img src={el.largeImageURL} className="pixabayImg" alt={index} />
                                        <div className="middleImg">
                                            <Button className="pixabayBtn" variant="dark" onClick={() => onSelectedPicture(el.largeImageURL, el.id)}><i className="fa fa-floppy-o" aria-hidden="true"></i></Button>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}