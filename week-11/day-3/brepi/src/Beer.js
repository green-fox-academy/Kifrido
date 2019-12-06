import React, { Component } from 'react'

export class Beer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getStyleImage = () => {
        return {
            maxWidth: 30,
            maxHeight: 'auto'
        };
    }

    async componentDidMount() {
        const url = 'https://api.punkapi.com/v2/beers/random';

        await fetch(url)
            .then(res => res.json())
            .then((beers) => {
                this.setState({ beers })
            })
            .catch(err => console.error(err))
    }

    handleClick = () => {
        //alert('card has been clicked');
        console.log(this.state.beers.map((beer, i) => <p key={i}>{beer.description}</p>));
       this.setState ((this.state.beers.map((beer, i) => <p key={i}>{beer.description}</p>)))
    };

    render() {
        const { beers } = this.state;
        return (
            <div>
                {beers ? beers.map((beer, i) => <p key={i}>{beer.name}</p>) : null}
                {beers ? beers.map((beer) => <
                    img key={beer.id}
                    onClick={this.handleClick}
                    src={beer.image_url}
                    alt="beer"
                    style={this.getStyleImage()}
                ></img>
                ) : null}
            </div>
        )
    }
}

export default Beer
