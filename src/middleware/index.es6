/* eslint-disable no-console */

function delay(msec){
  return new Promise(resolve => setTimeout(resolve, msec));
}

const log = require("debug")("middleware:logger");
export const logger = store => next => action => {
  log(`action.type = ${action.type}`);
  const result = next(action);
  log(store.getState());
  return result;
};

let localStorageTimeout;
export const saveLocalStorage = store => next => action => {
  const result = next(action);
  clearTimeout(localStorageTimeout);
  localStorageTimeout = setTimeout(() => {
    localStorage.state = JSON.stringify(store.getState());
    console.log("saveLocalStorage");
  }, 1000);
  return result;
};

export const m1 = store => next => async (action) => {
  console.log("m1 start");
  // await delay(1000);
  const result = next(action);
  console.log("m1 end");
  return result;
};

export const m2 = store => next => action => {
  console.log("m2 start");
  const result = next(action);
  console.log("m2 end");
  return result;
};

export function loadLocalStorage(){
  try{
    return JSON.parse(localStorage.state);
  }
  catch(err){
    console.error(err);
  }
  return null;
}
