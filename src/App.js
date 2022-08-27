import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Login from "./Pages/Authentication/Login/Login";
import Home from "./Pages/Home/Home/Home";
import Products from "./Pages/Home/Products/Products";
import Register from "./Pages/Authentication/Register/Register";
import PrivateRoute from "./Pages/Authentication/PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase";
import BikeCollections from "./Pages/BikeCollections/BikeCollections";
import AddProducts from "./Pages/AddProducts/AddProducts";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import MakeAdmin from "./Pages/DashBoard/MakeAdmin/MakeAdmin";
import MyOrder from "./Pages/DashBoard/MyOrder/MyOrder";
import AddReview from "./Pages/DashBoard/AddReview/AddReview";
import AdminRoute from "./Pages/Authentication/AdminRoute/AdminRoute";
import MyProfile from "./Pages/DashBoard/MyProfile/MyProfile";
import About from "./Pages/Home/About/About";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/bikeCollection" element={<BikeCollections />} />
          <Route
            path="/purchases/:bikesId"
            element={
              <PrivateRoute>
                <Purchase />
              </PrivateRoute>
            }
          />
          <Route
            path="/addProducts"
            element={
              <PrivateRoute>
                <AddProducts />
              </PrivateRoute>
            }
          />
          <Route path="/dashboard" element={<DashBoard />}>
          <Route index path="myProfile" element={<MyProfile />} />
            <Route
              path="makeAdmin"
              element={
                <AdminRoute>
                  <MakeAdmin />
                </AdminRoute>
              }
            />
            <Route path="myOrder" element={<MyOrder />} />
            <Route path="addReview" element={<AddReview />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
