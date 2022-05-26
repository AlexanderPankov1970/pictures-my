import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  ////////////////////////////////////
  //onChange={this.onInputChange}//нужно перенести в i
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }
  ////////////////////////////////////////////
  //   //Var 1
  onFormSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state.term);
    this.props.onSubmitApp(this.state.term);
  };
  //   //VAR 2
  //   //   onFormSubmit(event) {
  //   //     event.preventDefault();
  //   //     console.log(this.state.term);
  //   //   }

  //Jast an example
  //   onInputClick(event) {
  //     console.log(`Input was clicked`);
  //}

  render() {
    //console.log(this.state.term);
    return (
      <div className="ui segment">
        <form
          onSubmit={this.onFormSubmit} //VAR 1
          //onSubmit={(event) => this.onFormSubmit(event)} //VAR 2
          className="ui form"
        >
          <div className="field">
            <label>Image Search </label>
            <input
              type="text"
              placeholder="input data"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              //onClick={this.onInputClick}//Jast an example
            />
          </div>
        </form>
      </div>
    );
  }
  //   render() {
  //     return <div>SearchBar</div>;
}

export default SearchBar;
