import { Box, Heading, Text, Button } from '@chakra-ui/react'
const TodoItems = ({ id, title, desc, due_date, status, handleTodoStatus }) => {
	return (
		<Box mb={5}>
			<Heading>{title}</Heading>
			<Text>{desc}</Text>
			<Text>{due_date}</Text>
			<Button
				onClick={() => handleTodoStatus(id, status)}
			>{status ? "Completed" : "Pending"}</Button>
		</Box>
	)
}

export default TodoItems