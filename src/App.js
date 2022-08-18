import { Routes,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './Pages/Authentication/Login/Login';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Home/Products/Products';
import Register from './Pages/Authentication/Register/Register';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Orders from './Pages/Orders/Orders';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
            path="/order"
            element={
              <PrivateRoute>
                <Orders />
              </PrivateRoute>
            }
          />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
