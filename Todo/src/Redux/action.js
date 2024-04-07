import { ADD_TODOS, DELETE_TODOS, UPDATE_TODOS } from "./actionItems"

export const addTodo = () => {
	return { type: ADD_TODOS }
}

export const updateTodos = () => {
	return { type: UPDATE_TODOS }
}

export const deleteTodos = () => {
	return { type: DELETE_TODOS }
}
