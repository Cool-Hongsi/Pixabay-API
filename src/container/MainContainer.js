import React, { Component } from 'react';
import './MainContainer.scss';

export default class MainContainer extends Component{
    render(){

        const { title } = this.props;
        // title came from PixabayContainer Component

        return(
            <div className="maincontainer">
                <p className="title">{title}</p>
                {this.props.children}
            </div>
        )
    }
}