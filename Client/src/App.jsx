import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute';
import { UserContextProvider } from '../Context/UserContext';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import './App.css'

axios.defaults.baseURL = import.meta.env.VITE_REACT_BACKEND_URL;
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <Router>
      <UserContextProvider>
        <Toaster position='top-center' toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>

          <Route path='/dashboard' element= {
            <Dashboard />
          }></Route>
        </Routes>
      </UserContextProvider>
    </Router>
  )
}

export default App;