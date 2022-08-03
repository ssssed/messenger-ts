import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Register';

const App: React.FC = () => {
	return (
		<div>
			<Routes>
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	);
};

export default App;
