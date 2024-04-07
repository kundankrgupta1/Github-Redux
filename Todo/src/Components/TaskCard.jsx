import { Box, Button, ButtonGroup, Divider, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const TaskCard = ({ id, title, desc, due_date, status, handleToggle, handleDelete, setDeleteMessage }) => {

	return (
		<Box p={2} borderWidth={2} rounded={'lg'}>
			<Heading mb={2}>{title}</Heading>
			<Divider mb={2} />
			<Box>
				<Text textTransform={'uppercase'} fontSize={'xs'}>descriptions</Text>
				<Text fontSize={'md'}>{desc}</Text>
			</Box>
			<Divider mb={2} />
			<Box>
				<Text textTransform={'uppercase'} fontSize={'xs'}>due date</Text>
				<Text fontSize={'md'}>{due_date}</Text>
			</Box>
			<Divider mb={2} />
			<ButtonGroup>
				<Button
					bg={status ? "green.200" : "red.200"} _hover={'none'}
					onClick={() => handleToggle(id, status)}
				>{status ? "Completed" : "Pending"}</Button>
				<Link to="#">
					<Button bg={'blue.400'} _hover={'none'}>Edit</Button>
				</Link>
				<Button bg={'red.400'} _hover={'none'}
					onClick={() => {handleDelete(id); setDeleteMessage(true); setTimeout(()=> {setDeleteMessage(false)}, 2000)}}
				>Delete</Button>
			</ButtonGroup>
		</Box >
	)
}

export default TaskCard
