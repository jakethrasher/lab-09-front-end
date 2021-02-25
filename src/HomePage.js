import React, { Component } from 'react'

export default class HomePage extends Component {
    render() {
        const homePage={
            textAlign:'center',
            fontSize:'3em',
            backgroundColor:'yellow',
        }
        return (
            <div style={ homePage }>
                <h1>CAUTION: HOMEPAGE</h1>
            </div>
        )
    }
}
