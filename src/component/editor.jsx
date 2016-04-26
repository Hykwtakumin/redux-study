import React from "react";
import BindComponent from "./bindcomponent";

export default class Editor extends BindComponent{

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
    this.action.updateText(e.target.value);
  }
}
