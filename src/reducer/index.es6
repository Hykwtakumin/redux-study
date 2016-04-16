export default function reducer(state = {}, action){
  switch(action.type){
  case "editor:change":
    state.editor.text = action.value;
    break;
  }
  return state;
}
