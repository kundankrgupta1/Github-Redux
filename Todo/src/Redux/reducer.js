import { ADD_TODOS } from "./actionItems";

export const todoReducer = (state, action) => {
	switch (action.type) {
		case ADD_TODOS :
			return [...state, {state}]
	}
}