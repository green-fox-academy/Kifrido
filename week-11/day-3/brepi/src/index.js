import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import { Beer } from './Beer'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        const url = 'https://api.punkapi.com/v2/beers?page=2&per_page=6';

        await fetch(url)
            .then(res => res.json())
            .then((beers) => {
                this.setState({ beers })
            })
            .catch(err => console.error(err))
    }

    render() {
        const companyName = 'Beerers'
        const { beers } = this.state;
        return (
            <div
                className="container"
            >
                <h1>{companyName}</h1>
                <div className="allCards">
                    {beers ? beers.map((item) =>
                        <Beer
                            id={item.id}
                            name={item.name}
                            pic={item.image_url}
                            desc={item.description}
                        />)
                        : null}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
);

