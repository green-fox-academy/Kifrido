import React from 'react';
import ReactDOM from 'react-dom';
import { Beers } from './Beers'

class Header extends React.Component {
    getStyle = () => {
        return { border: '1px solid #F3F3F3' };
    }

    render() {
        const companyName = 'Beerers'
        return (
            <div
                className="container"
                style={this.getStyle()}>
                <h1>{companyName}</h1>
                < Beers/>
            </div>
        );
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
);