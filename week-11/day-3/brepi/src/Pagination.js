import React, { Component } from 'react';
import './pagination.css';

export class Pagination extends Component {
    render() {
        return (
            <div className='pagination'>
                <a href="#">1</a>
                <a className="active" href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
            </div>
        )
    }
}

export default Pagination
