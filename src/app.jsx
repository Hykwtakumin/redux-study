import React, {Component} from "react";
import Editor from "./component/editor";
import Preview from "./component/preview";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as Actions from "./action/";

class App extends Component{

  static get propTypes(){
    return {
      text: React.PropTypes.string.isRequired,
      actions: React.PropTypes.object.isRequired
    };
  }

  render(){
    const {text, actions} = this.props;
    console.log("render()", text);
    return (
      <div className="app">
        <h1>redux study</h1>
        <Editor text={text} onChange={actions.updateText} />
        <Preview text={text} />
      </div>
    );
  }

}


function mapStateToProps(state){
  return {
    text: state.editor.text
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
