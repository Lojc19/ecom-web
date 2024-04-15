import './App.css'
import ProductDetail from './components/Product/ProductDetail'
//import ProductItem from './components/Product/ProductItem'
// import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import { Routes, Route } from "react-router-dom";
import ReviewProduct from './components/Review/ReviewProduct';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductDetail />} />
        {/* <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:id" element={<CategoryProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-room" element={<CreateRoom />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/orders" element={<AdminOrders />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/product/:id" element={<UpdateProduct />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} /> */}
      </Routes>
    </>
  )
}

export default App
