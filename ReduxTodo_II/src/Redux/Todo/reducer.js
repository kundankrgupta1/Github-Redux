import { ADD_TODO } from "./actionItems";

const defaultTodos = [];

export const todoReducer = (prevState = defaultTodos, action) => {
	switch (action.type) {
		case ADD_TODO:
			return action.payload;
		default:
			return prevState;
	}

};
