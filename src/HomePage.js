import React, { Component } from 'react'

export default class HomePage extends Component {
    render() {
        const homePage={
            textAlign:'center',
            fontSize:'6em'
        }
        return (
            <div style={ homePage }>
                <h1>HOMEPAGE</h1>
            </div>
        )
    }
}
