import { Box, Button, Center, FormControl, Input, Text } from "@chakra-ui/react"
// import { useContext, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/Context";

const Login = () => {
	// const navigate = useNavigate();
	// const { setIsAuth } = useContext(AuthContext);

	// const [input, setInput] = useState({
	// 	email: "",
	// 	password: "",
	// });

	// function handleLogin(e) {
	// 	e.preventDefault();
	// 	const loggeduser = JSON.parse(localStorage.getItem("user"));
	// 	if (
	// 		input.email === loggeduser.email &&
	// 		input.password === loggeduser.password
	// 	) {
	// 		localStorage.setItem("loggedin", true);
	// 		setIsAuth(true);
	// 		navigate("/");
	// 	} else {
	// 		alert("wrong email and password");
	// 	}
	// }


	return (
		<Box maxWidth='400px' m='auto'>
			<form action="" className="py-4 px-10 shadow-2xl rounded-2xl"
			// onSubmit={handleLogin}
			>
				<Center fontSize='50px' textTransform='uppercase' mb={5} color='#E71580'><span className="underline">lo</span>gin</Center>
				<FormControl display="flex" flexDirection='column' gap={35}>

					<Input
						type="email"
						name="email"
						id="email"
						placeholder="Email or Username"
					// value={input.email}
					// onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
					/>

					<Input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						required
					// value={input.password}
					// onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
					/>
					<Button type="submit" bg='#E71580' _hover={{ bg: "#E71580" }} color='white'>Login</Button>
					<Text>By continuing, you agree to Conditions of Use and Privacy Notice.</Text>
				</FormControl>
				<Box>
					<Text display='flex' color="lightgray" cursor='not-allowed' my={5} justifyContent='flex-start' alignItems='center'><IoMdArrowDropright /> Forget password</Text>
					<hr />
					<Text mt={5} mb={2} display='flex' justifyContent='flex-start' alignItems='center'><VscDebugBreakpointData />&nbsp;New to this site?</Text>
					<Link><Button type="button" w='100%' mb={5} border='2px solid var(--default-color)'>Create your account</Button></Link>
				</Box>
			</form>
		</Box>
	)
}

export default Login
