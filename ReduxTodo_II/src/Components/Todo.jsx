import axios from "axios"
import TodoInput from "./TodoInput"
import TodoItems from "./TodoItems"
import { useEffect, useState } from "react"
import { Box } from "@chakra-ui/react"
import Loading from "./Loading"
import Error from "./Error"
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading, setIsError } from "../Redux/app_state/action"
const Todo = () => {
	const [data, setData] = useState([]);
	// const [isLoading, setIsLoading] = useState(false);
	// const [isError, setIsError] = useState(false);

	const { isLoading, isError } = useSelector((state) => state.appState)
	const dispatch = useDispatch();
	// console.log(state);
	const fetchData = async () => {
		// setIsLoading(true)
		dispatch(setIsLoading(true))
		try {
			const res = await axios("http://localhost:8080/todos", {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			})
			setData(res.data);
			dispatch(setIsLoading(false))
		} catch (error) {
			dispatch(setIsLoading(false))
			dispatch(setIsError(true))
			console.log("Error while fetching Data!")
			console.log(error);
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	const postTodos = async (newTodo) => {
		dispatch(setIsLoading(true))
		try {
			axios({
				method: "POST",
				baseURL: "http://localhost:8080",
				url: "todos/",
				data: newTodo,
				headers: {
					"Content-Type": "application/json"
				}
			}).then(() => fetchData())
			dispatch(setIsLoading(false))
		} catch (error) {
			dispatch(setIsLoading(false))
			dispatch(setIsError(true))
			console.log(error);
		}
	}
	const handleAddTodo = (title) => {
		const newTodo = {
			id: Date.now(),
			title,
			status: false
		};
		postTodos(newTodo)
	}

	const patchTodo = (id, status) => {
		dispatch(setIsLoading(true))
		try {
			axios({
				method: "PATCH",
				baseURL: "http://localhost:8080",
				url: `todos/${id}`,
				data: {
					status: !status
				},
				headers: {
					"Content-Type": "application/json"
				}
			}).then(() => fetchData())
			dispatch(setIsLoading(false))
		} catch (error) {
			dispatch(setIsLoading(false))
			dispatch(setIsError(true))
			console.log(error);
		}
	}

	const handleTodoStatus = (id, status) => {
		patchTodo(id, status)
	}
	return (
		isLoading ? <Loading /> : isError ? <Error /> :
			<div>
				<TodoInput handleAddTodo={handleAddTodo} />
				<Box width={800} m={'auto'} mt={5} >
					{data.map((e, ind) => <TodoItems key={ind} {...e} handleTodoStatus={handleTodoStatus} />)}
				</Box>
			</div >
	)
}

export default Todo