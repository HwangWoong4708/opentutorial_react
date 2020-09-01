import React from "react";
import "./App.css";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="1.html">HTML</a>
          </li>
          <li>
            <a href="2.html">CSS</a>
          </li>
          <li>
            <a href="3.html">JavaScript</a>
          </li>
        </ul>
      </nav>
    );
  }
}

class Article extends React.Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!" />
        <Subject title="REACT" sub="for UI" />
        <Nav />
        <Article title="HTML" desc="HTML is HyperText Markup Language." />
      </div>
    );
  }
}

export default App;

class Subject extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <h3>{this.props.sub}</h3>
      </header>
    );
  }
}
