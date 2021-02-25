import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './App.css'
import { getRecords } from './api-utils.js'
import Spinner from './Spinner.js';

export default class ListPage extends Component {
    state={
        records:[],
        loading: false,
    }
    componentDidMount = async ()=>{

        await this.setState({loading: true})

        const recordData = await getRecords();

        await this.setState({records: recordData})

        await this.setState({loading: false})
        
    }
    render() {
        const imageSize={
            width: '10em',
        }

        return (
            <div className="main-container">

                <div className="list-container">

                {this.state.loading ? <Spinner/> : 
                 this.state.records.map(item=>
                    <Link to={`/records/${item.id}`} key={item.id} className="list-item">
                        <img src={item.image_url} alt="album" style={imageSize}/>
                        <p>Artist: {item.artist}</p>
                        <p>Album: {item.album}</p>
                        <p>Condition: {item.condition}</p>
                        <p>Category: {item.name}</p>
                        <p>Price:${item.price}</p>
                    </Link>
                    )
                }
                </div>
            </div>
        )
    }
}
            