import React, {Component} from "react";

export default class Editor extends Component{

  static get propTypes(){
    return {
      text: React.PropTypes.string.isRequired,
      onChange: React.PropTypes.func.isRequired
    };
  }

  constructor(){
    super();
    this.onChange = this.onChange.bind(this);
  }

  render(){
    return (
      <div className="editor">
        <h2>editor</h2>
        <textarea value={this.props.text} onChange={this.onChange} />
      </div>
    );
  }

  onChange(e){
    console.log(e.target.value);
    this.props.onChange(e.target.value);
    // store.dispatch({type: "editor:change", value: e.target.value});
  }
}
