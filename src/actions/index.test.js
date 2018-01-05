import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from '../constants/ActionTypes';
import { addTodo, setVisibilityFilter, toggleTodo } from './index';

describe('addTodo', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    let nextTodoId = 0;
    const expectedAction = {
      type: ADD_TODO,
      id: nextTodoId++,
      text
    }
    expect(addTodo(text)).toEqual(expectedAction)
  })
});

describe('setVisibilityFilter', () => {
  it('should create an action to add a setVisibilityFilter', () => {
    const filter = 'Finish docs';
    const expectedAction = {
      type: SET_VISIBILITY_FILTER,
      filter
    }
    expect(setVisibilityFilter(filter)).toEqual(expectedAction)
  })
})

describe('toggleTodo', () => {
  it('should create an action to toogle todo', () => {
    const id = 1;
    const expectedAction = {
      type: TOGGLE_TODO,
      id
    }
    expect(toggleTodo(id)).toEqual(expectedAction)
  })
})