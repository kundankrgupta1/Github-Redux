import { Box, Input, Button } from '@chakra-ui/react'
import { useState } from 'react'
const TodoInput = ({ handleAddTodo }) => {
	const [title, setTitle] = useState("")
	// console.log(title)
	const handleChange = (e) => {
		setTitle(e.target.value)
	}

	return (
		<Box display={'flex'} width={800} m={'auto'} mt={5}>
			<Input type="text" placeholder="add todo" onChange={handleChange} />
			<Button onClick={() => handleAddTodo(title)}>Add</Button>
		</Box>
	)
}

export default TodoInput