import { Box, FormControl, Input, Heading, Checkbox, Button, Divider, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useReducer, useState } from 'react'
import TaskCard from '../Components/TaskCard';
// import { useSelector } from "react-redux";

const InitialState = {
	title: "",
	desc: "",
	due_date: "",
	status: false
}

const formReducer = (state, action) => {
	switch (action.type) {
		case "TITLE":
			return { ...state, title: action.payload }
		case "DESC":
			return { ...state, desc: action.payload }
		case "DUE_DATE":
			return { ...state, due_date: action.payload }
		case "STATUS":
			return { ...state, status: action.payload }
		case "RESET":
			return InitialState
		default: {
			throw new Error("Invalid Action Type")
		}
	}
}

const Home = () => {

	// const task = useSelector((state) => state)

	const [data, setData] = useState([])
	const [addMessage, setAddMessage] = useState(false);
	const [deleteMessage, setDeleteMessage] = useState(false)
	const [state, dispatch] = useReducer(formReducer, InitialState)
	const fetchData = async () => {
		try {
			const res = await axios.get(`http://localhost:8080/todos`)
			setData(res.data)
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		const delay = setTimeout(() => {
			fetchData();
		}, 1000)
		return () => clearInterval(delay)
	}, [])

	const handleToggle = (id, status) => {
		axios({
			method: "PATCH",
			baseURL: "http://localhost:8080",
			url: `/todos/${id}`,
			data: {
				status: !status
			},
			headers: {
				"Content-Type": "application/json"
			}
		}).then(() => fetchData())
	}

	const handleDelete = (id) => {
		axios({
			method: "DELETE",
			baseURL: "http://localhost:8080",
			url: `/todos/${id}`,
			headers: {
				"Content-Type": "application/json"
			}
		}).then(() => fetchData())
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		axios({
			method: "POST",
			baseURL: "http://localhost:8080",
			url: "/todos",
			data: state
		}).then(() => fetchData())
		dispatch({ type: "RESET" });
		e.target.reset();

		setAddMessage(true)
		setTimeout(() => {
			setAddMessage(false)
		}, 2000)
	}

	return (
		<Box px={20} pt={5}>
			<Box display={'flex'} justifyContent={'space-between'}>
				<Heading mb={2}>Add New Task</Heading>
				<Box>
					{
						addMessage &&
						<>
							<Alert status='success' variant='solid' rounded={'lg'}>
								<AlertIcon />
								Data Submitted Successfully!
							</Alert>
						</>
					}
					{
						deleteMessage &&
						<>
							<Alert status='error' variant='solid' rounded={'lg'}>
								<AlertIcon />
								Data Deleted Successfully!
							</Alert>
						</>
					}
				</Box>
			</Box>
			<form onSubmit={handleSubmit} style={{ display: "flex", gap: "15px" }}>
				<FormControl display={'flex'} gap={5}>
					<Input mb={3} type='text' placeholder="Task Name" name="title" required borderWidth={2} borderColor={'black'} onChange={(e) => dispatch({ type: "TITLE", payload: e.target.value })} />

					<Input type="text" mb={3} placeholder="Descriptions" name="desc" required borderWidth={2} borderColor={'black'} onChange={(e) => dispatch({ type: "DESC", payload: e.target.value })} />

					<Input mb={3} type='date' name="due_date" required borderWidth={2} borderColor={'black'} onChange={(e) => dispatch({ type: "DUE_DATE", payload: e.target.value })} />

					<Checkbox mb={3} name="status" borderBottomWidth={2} borderBottomColor={'black'} px={2} rounded={'md'} onChange={(e) => dispatch({ type: "STATUS", payload: e.target.checked })}>Completed?</Checkbox>

				</FormControl>
				<Button type="submit" width={'10%'} bg={'black'} textColor={'#fff'} _hover={'none'}>Submit</Button>
			</form>
			<Divider my={8} />
			<Box display={'flex'} flexWrap={'wrap'} gap={2}>
				{data.length === 0 ?

					<>
						<Alert
							status='success'
							variant='subtle'
							flexDirection='column'
							alignItems='center'
							justifyContent='center'
							textAlign='center'
							height='200px'
							rounded={'lg'}
						>
							<AlertIcon boxSize='40px' mr={0} />
							<AlertTitle mt={4} mb={1} fontSize='lg'>
								Voila, all finished 🥳🤩
							</AlertTitle>
							<AlertDescription maxWidth='sm'>
							Not Completed/Pending Task
							</AlertDescription>
							<AlertDescription maxWidth='sm'>
							👉 Start Adding Task...
							</AlertDescription>
						</Alert>
					</> :
					// <Text w={'100%'} textAlign={'center'}>Not Completed/Pending Task</Text> :
					<>
						{
							data.map((e, ind) => <TaskCard key={ind} {...e}
								handleToggle={handleToggle} handleDelete={handleDelete} setDeleteMessage={setDeleteMessage}
							/>)
						}
					</>
				}
			</Box>
		</Box>
	)
}

export default Home