import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component {
    render() {
        const companyName = 'Beerers'
        return (
            <header>{ companyName }</header>
        );
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
);