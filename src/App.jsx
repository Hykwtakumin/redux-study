import React, {Component} from "react";
import Editor from "./component/Editor";
import Preview from "./component/Preview";

export default class App extends Component{

  static get propTypes(){
    return {
      store: React.PropTypes.object.isRequired
    }
  }

  render(){
    const {store} = this.props;
    return (
      <div className="app">
        <h1>redux study</h1>
        <Editor store={store} />
        <Preview store={store} />
      </div>
    );
  }

}
