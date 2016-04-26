import React from "react";

import {Component} from "../store";

export default class Editor extends Component{

  mapState(state){
    return {editor: state.editor};
  }

  constructor(){
    super();
    this.onChange = this.onChange.bind(this);
  }

  render(){
    return (
      <div className="editor">
        <h2>editor</h2>
        <textarea value={this.state.editor.text} onChange={this.onChange} />
      </div>
    );
  }

  onChange(e){
    this.actions.updateText(e.target.value);
  }
}
