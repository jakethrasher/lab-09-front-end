import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        const header={
            borderBottom: '2px solid black',
            fontSize: '1.3em',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems:'center',
            height: '3em'
        }
        const linkContainer={
            width:'50%',
            display:'flex',
            justifyContent:'space-evenly'
        }
        return (
            <div style={ header }>
                <div style={ linkContainer}>

                <NavLink exact to='/'> Records Page </NavLink>
                <NavLink exact to='/create'> Add Record</NavLink>

                </div>
            </div>
        )
    }
}
                
