import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom"
import AuthContextProvider from './Context/AuthContext.jsx'
// import { store } from './Redux/store.js'
// import { Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthContextProvider>
		{/* <Provider store={store}> */}
			<ChakraProvider>
				<ColorModeScript initialColorMode="light"></ColorModeScript>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ChakraProvider>
		{/* </Provider> */}
	</AuthContextProvider>
)
