
const log = require("debug")("middleware:logger");
export const logger = store => next => action => {
  const result = next(action);
  log(store.getState());
  return result;
};

export const saveLocalStorage = store => next => action => {
  const result = next(action);
  localStorage.state = JSON.stringify(store.getState());
  return result;
};

export function loadLocalStorage(){
  try{
    return JSON.parse(localStorage.state);
  }
  catch(err){
    console.error(err);
  }
}
