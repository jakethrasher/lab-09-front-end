import React, { Component } from 'react'
import { deleteRecord, getRecord, putRecord } from './api-utils.js';
import './App.css'

export default class DetailPage extends Component {
    state={
        artist:'',
        album:'',
        image_url:'',
        condition:'',
        category_id:1,
        price:0,
    }
    componentDidMount = async () =>{
        const record = await getRecord(this.props.match.params.recordId)
        
        this.setState({
            ...record
        })
    }


    handleSubmit = async(e)=>{
        e.preventDefault();
        await putRecord(this.props.match.params.recordId,this.state)
        this.props.history.push('/records');
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
                await this.setState({price: e.target.value})
            }
        }
    handleDelete = async () =>{
        await deleteRecord(this.props.match.params.recordId)
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
                        <button>Update</button>
                    </form>
                        <button onClick={this.handleDelete}>Delete</button>
                </div>
            )
        }
    }
        
        
    