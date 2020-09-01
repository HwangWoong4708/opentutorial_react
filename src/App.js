import React from "react";
import Nav from "./components/Nav";
import Article from "./components/Article";
import Subject from "./components/Subject";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!" />
        <Nav />
        <Article title="HTML" desc="HTML is HyperText Markup Language." />
      </div>
    );
  }
}

export default App;
