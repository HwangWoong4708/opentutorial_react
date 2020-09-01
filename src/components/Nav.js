import React from "react";

class Nav extends React.Component {
  render() {
    var data = this.props.data; //내부적으로 data라는 props로부터  App의 state인 contents 값을 받음.
    var i = 0;
    var lists = [];
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a href={"/content/" + data[i].id}>{data[i].title}</a>
        </li>
      );
      i = i + 1;
    }
    return <nav>{lists}</nav>;
  }
}

export default Nav;
