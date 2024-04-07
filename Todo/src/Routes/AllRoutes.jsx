import Home from "../Pages/Home"
import { Routes, Route } from "react-router-dom"
import Login from "../Pages/Login"
import PrivateRoute from "../Context/PrivateRoute"
const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={
				<PrivateRoute>
					<Home />
				</PrivateRoute>
			} />
			<Route path="/login" element={<Login />} />
		</Routes>
	)
}
export default AllRoutes