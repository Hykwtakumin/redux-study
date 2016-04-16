/* eslint-disable react/no-danger */

import React from "react";
import {Component} from "../store";

import MarkdownIt from "markdown-it";
const markdown = new MarkdownIt();

export default class Preview extends Component{
  mapState(state){
    return state.editor;
  }

  render(){
    const __html = markdown.render(this.state.text);
    return (
      <div className="preview">
        <h2>preview</h2>
        <div dangerouslySetInnerHTML={{__html}}></div>
      </div>
    );
  }
}
