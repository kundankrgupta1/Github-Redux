import Home from "../Pages/Home"
import { Routes, Route } from "react-router-dom"
import Login from "../Pages/Login"
const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	)
}
export default AllRoutes