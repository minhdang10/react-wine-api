import React, {Component} from 'react';
import axios from 'axios';
const wine_api = 'http://myapi-profstream.herokuapp.com/api/1d82a5/wines';

class Wine6 extends Component{
    constructor(props){
        super(props)
        this.state = {
            wine:[]
        }
    }

    async getWine(){
        try {
            const info = await axios.get(wine_api);
            this.setState({wine: info.data[5]});
        }
        catch{
            console.log('Error!');
        }
    }

    componentDidMount(){
        this.getWine();
    }

    render(){
        return(
            <div>
                <h3>Name: {this.state.wine.name}</h3>
                <img src={(this.state.wine.picture)} alt='wine 6'/>
                <p>ID: {this.state.wine.id}</p>
                <p>Year: {this.state.wine.year}</p>
                <p>Grapes: {this.state.wine.grapes}</p>
                <p>Country: {this.state.wine.country}</p>
                <p>Region: {this.state.wine.region}</p>
                <p>Description: {this.state.wine.description}</p>
                <p>Price: ${this.state.wine.price}</p>
                <button>Buy now!</button>
            </div>
        )
    }
}

export default Wine6;