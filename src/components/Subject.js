import React from "react";

class Subject extends React.Component {
  render() {
    return (
      <header>
        <h1>
          <a href="/">{this.props.title}</a>
        </h1>
        <h3>{this.props.sub}</h3>
      </header>
    );
  }
}

export default Subject;
