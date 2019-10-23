import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainContainer from './MainContainer';
import Pixabay from '../component/Pixabay';
import MyCollection from '../component/MyCollection';
import { getPictures } from '../store/modules/pixabay';
import { selectedPictures } from '../store/modules/mycollection';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './PixabayContainer.scss';

class PixabayContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            search : '',

            toggle : false,

            toggleContext : 'My Collection'
        };

        this.onSelectedSearch = this.onSelectedSearch.bind(this);
        this.setSearch = this.setSearch.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.onSelectedPicture = this.onSelectedPicture.bind(this);
        this.toggleChange = this.toggleChange.bind(this);
    };

    // componentDidMount = () => {
    //     const { getAllPictures } = this.props;
    //     getAllPictures();
    // };

    /* Receive pictures by search content */
    onSelectedSearch = (content) => {
        const { getPictures } = this.props;
        
        /* ################# Insert your Pixabay API Key in second parameter ################# */
        getPictures(content, "13980351-a4740f26731c474783d4dd29c");
    };

    /* Receive the search content from input tag */
    setSearch = (e) => {
        this.setState({
            search : e.target.value
        })
    };

    /* Enable to use Enter key */
    keyPress = (e) =>{
        if(e.key === 'Enter'){
            this.onSelectedSearch(this.state.search);
        }
    };

    /* Once the user clicks the pic to save, the function will be called to save pic into my collection with url & id */
    onSelectedPicture = (selectedPic, selectedId) => {
        const { selectedPictures } = this.props;
        selectedPictures(selectedPic, selectedId);
    };

    /* To convert page (The page will be changed as the value of this.state.toggle */
    toggleChange = () => {
        if(this.state.toggleContext === "My Collection"){
            this.setState({
                toggle : !this.state.toggle,
                toggleContext : "Go To Search"
            })
        }
        else if(this.state.toggleContext === "Go To Search"){
            this.setState({
                toggle : !this.state.toggle,
                toggleContext : "My Collection"
            })
        }
    };

    render(){

        const { pixabayList, myCollection } = this.props;
        // pixabayList came from pixabayReducer
        // myCollection came from pixabaymyCollectionReducer

        /* Since myCollection array has initial value (empty), use filter function to abandon first initial value */
        let newMyCollection = myCollection.filter((el) => {
            return el.url !== "";
        });

        return(
            <MainContainer title="Pixabay API">
                <div className="pixabayContainer">
                    <Container>
                        <Row>
                            <Col sm={6} xs={6}>
                                {/* The reason why I use visibility is because it takes up the space although it is invisible */}
                                <div style={{visibility: this.state.toggle ? 'hidden' : 'visible'}}>
                                    <div className="form">
                                        <input className="search-box" name="search" type="text" onChange={this.setSearch} onKeyPress={this.keyPress} autoComplete="off" required />
                                        <label htmlFor="search" className="label-search">
                                            <span className="content-search">Search</span>
                                        </label>
                                        <Button className="search-btn" variant="outline-dark" onClick={() => this.onSelectedSearch(this.state.search)}><i className="fa fa-search" aria-hidden="true"></i></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} xs={6}>
                                <div className="btn-section">
                                    <Button className="toggle-btn" variant="outline-dark" onClick={this.toggleChange}>{this.state.toggleContext}</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="result-section">
                        {pixabayList.length !== 0 && this.state.toggle !== true
                        ?
                        <div>
                            <Pixabay pixabayList={pixabayList} onSelectedPicture={this.onSelectedPicture} />
                        </div>
                        : null}

                        {this.state.toggle !== false
                        ? <MyCollection myCollection={newMyCollection} />
                        : null}
                    </div>
                </div>
            </MainContainer>
        )
    }
};

/* pixabayList : Storing pictures once the user search (via Pixabay API) */
/* myCollection : Storing pictures that the user clicks save button */
const mapStateToProps = (state) => {
    return {
        pixabayList : state.pixabayReducer,
        myCollection : state.pixabayMyCollectionReducer.data
    };
};

/* getPictures function came from pixabay.js */
/* selectedPictures function came from mycollection.js */
const mapDispatchToProps = (dispatch) => {
    return {
        getPictures : (content, APIKey) => { dispatch(getPictures(content, APIKey)) },
        selectedPictures : (selectedPic, selectedId) => { dispatch(selectedPictures(selectedPic, selectedId)) }
    };
};

/* In order to use mapState / mapDispatch within PixabayContainer */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PixabayContainer);