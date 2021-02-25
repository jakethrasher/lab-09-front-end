import React, { Component } from 'react'
import { getRecord } from './api-utils.js';
import './App.css'

export default class DetailPage extends Component {
    state={
        artist:'',
        album:'',
        image_url:'',
        condition:'',
        category_id:1,
        price:'',
        categories:[]

    }
    componentDidMount =async()=>{
        const record = await getRecord(this.props.match.params.recordId)
        
        this.setState({
            ...record
        })
    }


    handleSubmit = async(e)=>{
        e.preventDefault();
        
        this.props.history.push('/');
    }
    
    handleChangeCategory=(e)=>{
        this.setState({ category_id: Number(e.target.value)})
    }
    handleInputChange = async (e)=>{
        
            if(e.target.name === 'artist'){
               await this.setState({artist: e.target.value})
            }else if(e.target.name === 'album'){
                await this.setState({album: e.target.value})
            }else if(e.target.name === 'image_url'){
                await this.setState({image_url: e.target.value})
            }else if(e.target.name === 'condition'){
                await this.setState({condition: e.target.value})
            }else if(e.target.name === 'price'){
                await this.setState({price: Number(e.target.value)})
            }
        }
        
        render() {
            console.log(this.state)
            
            return (
                <div className="form-container">
                    <h1>UPDATE RECORD</h1>
                    <form onSubmit={this.handleSubmit} className="form">
                        <label>
                            Artist
                            <input name="artist" type="text" onChange={this.handleInputChange} value={this.state.artist}/>
                        </label>
                        <label>
                            Album
                            <input name="album" type="text" onChange={this.handleInputChange} value={this.state.album} />
                        </label>
                        <label>
                            Image URL
                            <input name="image_url" type="text" onChange={this.handleInputChange} value={this.state.image_url}  />
                        </label>
                        <label>
                            Condition
                            <input name="condition" type="text" onChange={this.handleInputChange} value={this.state.condition}/>
                        </label>
                        <label>
                            Price
                            <input name="price" type="number" onChange={this.handleInputChange} value={this.state.price}/>
                        </label>
                        <label>
                            Category
                            <select onChange={this.handleChangeCategory} value={this.state.category_id}>
                                <option value={1}>House</option>
                                <option value={2}>Drum n Bass</option>
                                <option value={3}>Electronic</option>
                                <option value={4}>Electro-industrial</option>
                            </select>
                        </label>
                        <button>ADD To Records</button>
                    </form>
                </div>
            )
        }
    }
        
        
    