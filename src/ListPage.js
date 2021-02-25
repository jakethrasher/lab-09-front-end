import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './App.css'
import { getRecords } from './api-utils.js'

export default class ListPage extends Component {
    state={
        records:[],
    }
    componentDidMount = async ()=>{

      const recordData = await getRecords();
      this.setState({records: recordData})
       console.log(this.state.records)     
    }
    render() {
        const imageSize={
            width: '10em',
        }

        return (
            <div className="main-container">
                <div className="list-container">
                {this.state.records.map(item=>
                <Link to={`/${item.id}`} key={item.id} className="list-item">
                    <img src={item.image_url} alt="album" style={imageSize}/>
                    <p>Artist: {item.artist}</p>
                    <p>Album: {item.album}</p>
                    <p>Condition: {item.condition}</p>
                    <p>Category: {item.name}</p>
                    <p>Price: {item.price}</p>
                </Link>
                )}
                </div>
            </div>
        )
    }
}
              