import React, { Component } from 'react';
import axios from "axios";

export default class Character extends Component {

    state = {
        character: {}
    }

    componentDidMount() {
        axios.get('https://www.anapioficeandfire.com/api/characters/823')
        .then(res => {
          console.log(res.data);
    
          this.setState({
            character: res.data
          })
        })
    }

    render() {
        return (
            <div>
                {this.state.character.name}
            </div>
        )
    }
}
