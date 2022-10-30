import React, { Component } from 'react';
import axios from 'axios'

export default class Garden extends Component {
    constructor() {
        super();
        this.state = {
            gardens: 'None'
        };
    }
    componentDidMount = async () => {
        console.log("Mounted");
        const res = await axios.get('http://localhost:5000/add-garden', {
            proxy: {
                host: 'localhost',
                port: 5000
            }
        });
        console.log(res)
        console.log('Mounted')
    }
    render() {
        console.log(this.state.gardens)
        return (
            <>
                <h1>Loading Page</h1>
            </>
        );
    }
} 