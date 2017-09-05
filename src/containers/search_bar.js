import React, { Component } from 'react';
import axios from 'axios';

export default class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = { term: '' }

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.setState({ term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        const apiKey = '270264d693fadd9bc5163c19cd93cf4e';
        const cityName = event.target.value;
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
        axios.get(url).then(res=> {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}