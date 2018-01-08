import { getApiData } from '../api/index';


let nextTodoId = 0

export function addTodo(text) {
  return (dispatch) => {
    getApiData(text).then((data) => {
      nextTodoId += parseFloat(data.values.incrementstep);
      dispatch({
        type: 'ADD_TODO',
        id: nextTodoId,
        text
      });
    });
  };
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
