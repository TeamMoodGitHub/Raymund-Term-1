import React from 'react';

export class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.exploreClick = this.exploreClick.bind(this);
  }

  handleClick(input) {
    this.props.onClick(input.target.value);
  }

  exploreClick() {
    this.props.exploreClick();
  }

  render() {
    return (
      <div className="exploreButtons">
        <div className="dropdown">
          <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Choose Your City
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2" onClick={this.handleClick}>
            <button className="dropdown-item" type="button" value="New York, NY" >New York, NY</button>
            <button className="dropdown-item" type="button" value="Seattle, WA" >Seattle, WA</button>
            <button className="dropdown-item" type="button" value="Orlando, FL" >Orlando, FL</button>
          </div>
        </div>
        <div>
          <button className="btn btn-dark" type="button">EXPLORE (This doesnt do anything yet)</button>
        </div>
      </div>
    );
  }
}
