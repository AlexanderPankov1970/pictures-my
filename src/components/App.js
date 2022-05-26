import React from "react";
//import axios from "axios";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

///////////////////////////////////////////
//Функциональный компонент
// const App = () => {
//   return (
//     <div className="ui container" style={{ marginTop: "10px" }}>
//       <SearchBar />
//     </div>
//   );
// };
//////////////////////////////////////////

class App extends React.Component {
  state = { images: [] };
  //VAR 1
  // onSearchSubmit = (term) => {
  //   console.log(term);
  //   axios
  //     .get("https://api.unsplash.com/search/photos", {
  //       params: { query: term },
  //       headers: {
  //         Authorization:
  //           "Client-ID amowUtyHWFIHxZ5J7yy9UYffFzRtqTEjVxO9w4jYBqY",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data.results);
  //       this.setState({ images: response.data.results });
  //     });
  // };
  //VAR 2 async/await
  // onSearchSubmit = async (term) => {
  //   const response = await axios.get("https://api.unsplash.com/search/photos", {
  //     params: { query: term },
  //     headers: {
  //       Authorization: "Client-ID amowUtyHWFIHxZ5J7yy9UYffFzRtqTEjVxO9w4jYBqY",
  //     },
  //   });
  //   console.log(response.data.results);
  //   this.setState({ images: response.data.results });
  // };
  //VAR 3 async/await optional
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitApp={this.onSearchSubmit} />
        {/* Found: {this.state.images.length} images */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
