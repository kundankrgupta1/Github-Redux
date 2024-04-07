import { Box, Heading, Button, Input, useColorMode, IconButton } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { FiSun, FiMoon } from "react-icons/fi";
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";
	const { isAuth } = useContext(AuthContext);

	return (
		<Box w={'100%'} shadow={'md'} px={20} display={'flex'} justifyContent={'space-between'} py={5}>
			<Link to="/">
				<Heading>Todos</Heading>
			</Link>
			<Input type="text" maxW={350} placeholder="Search task..."
			// onChange={(e) => setSearch(e.target.value)}
			/>
			<Box display={'flex'} gap={5}>
				<IconButton icon={isDark ? <FiSun /> : <FiMoon />} onClick={toggleColorMode} />
				<Link to="/login">
					<Button>{ isAuth ? "Logout" : "Login" }</Button>
				</Link>
			</Box>
		</Box>
	)
}

export default Navbar