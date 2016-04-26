export default function editorReducer(state = {}, action){
  switch(action.type){
  case "editor:change":
    state.text = action.value;
    break;
  }
  return Object.assign({}, state);
}
