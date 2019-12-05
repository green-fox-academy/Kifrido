import React, { Component } from 'react'

export class Beer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }

    getStyleImage = () => {
        return {
            width: 100,
            height: 'auto'
        };
    }

    async componentDidMount() {
        const url = 'https://api.punkapi.com/v2/beers';

        await fetch(url)
            .then(res => res.json())
            .then((beers) => {
                this.setState({ beers })
            })
            .catch(err => console.error(err))
    }
    render() {
        const { beers } = this.state;
        return (
            <div>
                {beers ? beers.map((beer) => <
                    img key={beer.id}
                    src={beer.image_url}
                    alt="beer"
                    style={this.getStyleImage()}
                ></img>
                ) : null}
                {beers ? beers.map((beer) => <p key={beer.id}>{beer.name}</p>) : null}
            </div>
        )
    }
}

export default Beer
