import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Home/Products/Products';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
