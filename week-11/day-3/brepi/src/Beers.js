import React, { Component } from 'react'

export class Beers extends Component {
  
    componentDidMount() {
        const url = 'https://api.punkapi.com/v2/beers';

        fetch(url)
        .then(res => res.json())
        .then(res => console.log(res[0].name))
        .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
    
            </div>
        )
    }
}

export default Beers
