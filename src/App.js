import React, {Component} from "react";
import axios from "axios";
import Character from "./Character";

class App extends Component {
  state =  {
    houses: []
  }
  
  componentDidMount() {
    axios.get('https://www.anapioficeandfire.com/api/houses')
    .then(res => {
      console.log(res.data);

      this.setState({
        houses: res.data
      })
    })
  }

  render() {

    // Quand pas d'id transmis pour ma donnée
    const housesJSX = this.state.houses.map((house,index) => {
      return <li key={index}>{house.name} from {house.region}</li>
    })


    return (
      <div className="App">
        <ul>
          {housesJSX}
        </ul>
        <Character/>
      </div>
    );
  }
}

export default App;
