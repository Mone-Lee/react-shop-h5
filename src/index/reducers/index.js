import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import undoable from './undoable';

const undoTodos = undoable(todos);

const todoApp = combineReducers({
  todos: undoTodos,
  visibilityFilter
})

export default todoApp