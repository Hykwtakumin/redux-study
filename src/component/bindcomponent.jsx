import React from "react";
import {store} from "../store";
import {bindActionCreators} from "redux";
import * as Actions from "../action/";
import Debug from "debug";

export default class BindComponent extends React.Component{

  mapState(state){
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    if(Object.keys(nextProps).length !== Object.keys(this.props).length ||
       Object.keys(nextState).length !== Object.keys(this.state).length) return true;
    for(let k in nextState){
      if(typeof nextState[k] === "object" ||
         this.state[k] !== nextState[k]) return true;
    }
    for(let k in nextProps){
      if(typeof nextProps[k] === "object" ||
         this.props[k] !== nextProps[k]) return true;
    }
    this.debug("shouldNotComponentUpdate");
    return false;
  }

  componentWillUnmount(){
    this.debug("componentWillUnmount()");
    this.unsubscribeStore();
  }

  componentDidMount(){
    this.debug("componentDidMount()");
    this.unsubscribeStore = store.subscribe(() => {
      this.setState(this.mapState(store.getState()));
    });
  }

  constructor(){
    super();
    this.debug = Debug("component:" + this.constructor.name.toLowerCase());
    this.debug("constructor()");
    this.state = this.mapState(store.getState());
    this.action = bindActionCreators(Actions, store.dispatch);
  }

}
