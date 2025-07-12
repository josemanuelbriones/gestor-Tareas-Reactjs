//import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import NotePage from '../pages/NotePage';
import NotFound from '../pages/NotFound';
import '../styles/style.css'

// import { useState } from 'react'
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'


function App() {
  return (
			<BrowserRouter>
				<Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} /> 
          <Route path="NotePage" element={<NotePage />} /> 
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
			</BrowserRouter>
  )
}

export default App;
