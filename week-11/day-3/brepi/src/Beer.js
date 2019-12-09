import React, { Component } from 'react'
import './cards.css';

export class Beer extends Component {
    constructor(props){
        super(props);
        this.state = { isPictureOn: true };
    
    };

    handleClick = () => {
        this.setState(state => ({
            isPictureOn : !state.isPictureOn
        }));
    };

    render() {
        return (
            <div className="beers" key={this.props.id} >
                <div className="beerPic" onClick={this.handleClick}> {this.state.isPictureOn ? <img src={this.props.pic} alt="beerpic" /> : <p>{this.props.desc}</p>}</div>
                <div className="holder" >
                    <div className="beerName">{this.props.name}</div>
                </div>
            </div>)
    }
};

export default Beer
