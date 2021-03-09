export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(state.todos, action)
  switch (action.type){
    case "ADD_TODO":
      return {...state, todos: [...state.todos, action.toDo]}
    default:
      return state;
  }
}
