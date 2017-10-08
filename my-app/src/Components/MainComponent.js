import React from 'react';
import { Map } from './MapStuff';
import { SearchForm } from './SearchFormComponent';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      city: ''
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(newText) {
    this.setState({
      text: newText,
      city: newText
    });
  }

  render() {
    const howText = (
      <div classname="HowToUseText">
        <h2> How to Use: </h2>
        <h3>Choose your city.</h3>
        <h3>Click the marker on the map.</h3>
        <h3>The map chooses a random location for you to go to.</h3>
      </div>
    );
    var infoText = (this.state.city == '') ? howText:this.state.city;
    
    return(
      <div className="main">
        <SearchForm onClick={this.changeState}/>
        <div className="boxes">
          <div className="mapBox" id="box">
            <Map city={this.state.city} marker={this.state.marker}/>
          </div>
          <div className="infoBox" id="box">
            {infoText}
          </div>
        </div>
      </div>
    );
  }
}
