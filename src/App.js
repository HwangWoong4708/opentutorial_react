import React from "react";
import Nav from "./components/Nav";
import Article from "./components/Article";
import Subject from "./components/Subject";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      subject: { title: "WEB", sub: "world wide web!" }, //스테이트를 이용해서 초깃값 정해줌.
      welcome: { title: "Welcome", desc: "Hello, React!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML for Information " },
        { id: 2, title: "CSS", desc: "CSS for Design " },
        { id: 3, title: "JavaScript", desc: "JavaScript for interactive " },
      ],
    };
  }
  render() {
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[1].title;
      _desc = this.state.contents[1].desc;
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title} //처음 선언한 스테이트값을 Subject컴포넌트에 props로 전해줌.
          sub={this.state.subject.sub}
        />
        <Nav data={this.state.contents} />
        <Article title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;

//Constructor => 컴포넌트가 실행될때 render보다 먼저 실행이 되면서 컴포넌트를 초기화시켜주고싶다면 해당 코드는 constructor안에다가 작성한다.
//상위 컴포넌트인 App의 상태(state)를 하위 Component에 전달하고 싶을 때는 상위 컴포넌트의 state를 하위 컴포넌트에 props값으로 전달할 수 있다.
