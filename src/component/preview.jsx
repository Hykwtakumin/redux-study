/* eslint-disable react/no-danger */

import React, {Component} from "react";

import MarkdownIt from "markdown-it";
const markdown = new MarkdownIt();

export default class Preview extends Component{

  static get propTypes(){
    return {
      text: React.PropTypes.string.isRequired
    };
  }

  render(){
    const __html = markdown.render(this.props.text);
    return (
      <div className="preview">
        <h2>preview</h2>
        <div dangerouslySetInnerHTML={{__html}}></div>
      </div>
    );
  }
}
