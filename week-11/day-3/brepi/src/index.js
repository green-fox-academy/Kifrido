import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Cards } from './Card'

class Header extends Component {
    getStyle = () => {
        return {
            border: '1px solid #F3F3F3'
        };
    }

    styleCards = () => {
        return {
            display: 'flex',
            margin: 5,
            justifyContent: 'space-between'
        };
    }

    render() {
        const companyName = 'Beerers'
        return (
            <div
                className="container"
                style={this.getStyle()}>
                <h1>{companyName}</h1>
                <div>
                    <div style={this.styleCards()}>
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                    <div style={this.styleCards()}>
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
);

