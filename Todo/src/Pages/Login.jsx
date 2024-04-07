import { Box, Button, Center, FormControl, Input, Text } from "@chakra-ui/react"
import { useContext, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
	const { setIsAuth } = useContext(AuthContext);
	const navigate = useNavigate()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const res = await fetch("https://reqres.in/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					email: email,
					password: password,
				}),
			})
			const finRes = await res.json();
			setIsAuth(true)
			console.log(finRes)
			navigate("/")
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Box maxWidth='400px' m='auto' borderWidth={2} px={5} py={1} mt={5} rounded={'md'}>
			<form action="" className="py-4 px-10 shadow-2xl rounded-2xl"
				onSubmit={handleLogin}
			>
				<Center fontSize='50px' textTransform='uppercase' mb={5} color='#E71580'><span style={{ textDecoration: "underline" }}>lo</span>gin</Center>
				<FormControl display="flex" flexDirection='column' gap={35}>
					<Input
						type="email"
						name="email"
						id="email"
						placeholder="Email or Username"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
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
