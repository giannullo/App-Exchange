import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

import GlobalStyle from './globalStyles';
import DropdownTest from './pages/DropdownTest';
import HomePage from './pages/HomePage';

function App() {
	return (
		<Router>
			<GlobalStyle />
			
			<Routes>
				<Route exact path="/" element={<HomePage/>} />
				<Route exact path="/test" element={<DropdownTest/>} />
			</Routes> 
			<Footer></Footer>
		</Router>
	);
}

export default App;

// https://v6.exchangerate-api.com/v6/d56289915940c1af936db3b5/latest/USD