import React, {Component} from "react";
import Editor from "./component/Editor";
import Preview from "./component/Preview";

export default class App extends Component{

  render(){
    return (
      <div className="app">
        <h1>redux study</h1>
        <Editor />
        <Preview />
      </div>
    );
  }

}
