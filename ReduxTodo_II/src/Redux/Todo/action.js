import { ADD_TODO } from "./actionItems"

export const setAddTodo = (payload) => {
	return { type: ADD_TODO, payload }
}