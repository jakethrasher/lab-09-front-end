import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

export default withRouter (class Header extends Component {
    render() {
        const header={
            borderBottom: '2px solid black',
            fontSize: '1.3em',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems:'center',
            height: '3em',
            backgroundColor: 'lightpink'
        }
        const linkContainer={
            width:'50%',
            display:'flex',
            justifyContent:'space-evenly'
        }
        return (
            <div style={ header }>
                <div style={ linkContainer}>

                {this.props.location.pathname !=='/' && <NavLink exact to='/'>Home</NavLink>}
                {this.props.location.pathname !=='/records' && <NavLink exact to='/records'> Records Page </NavLink>}
                <NavLink exact to='/create'> Add Record</NavLink>

                </div>
            </div>
        )
    }
})
                
