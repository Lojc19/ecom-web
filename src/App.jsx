import './App.css'
import ProductDetail from './pages/Product/ProductDetail'
//import ProductItem from './components/Product/ProductItem'
// import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import { Routes, Route } from "react-router-dom";
import ReviewProduct from './components/Review/ReviewProduct';
import UserProfile from './pages/Profile/UserDashBoard';
import UserOrders from './pages/Profile/UserOrders';
import Wishlist from './pages/Wishlist/Wishlist';
import PrivateRoute from './components/Auth/Private';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import ProductCategory from './pages/Product/Category/ProductCategory';
import UserOrderDetail from './pages/Profile/UserOrderDetail';
import SearchProduct from './pages/Product/SearchProduct';
import Thank from './pages/Thank/Thank';
import Fail from './pages/Thank/Fail';
import Register from './pages/Register/Register';
import Resetpassword from "./pages/Profile/ResetPassUser/ResetPassword"
import NewPassword from './pages/Profile/ResetPassUser/NewPassword';
import SubmitOTP from './pages/Profile/ResetPassUser/SubmitOTP';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="profile" element={<UserProfile />} />
          <Route path="orders" element={<UserOrders />} />
          <Route path="orders/:id" element={<UserOrderDetail />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/payment" element={<PrivateRoute />}>
          <Route path="checkout" element={<Checkout />} />
          <Route path="thank" element={<Thank />} />
          <Route path="fail" element={<Fail />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/category/:id" element={<ProductCategory />} />
        <Route path="/search/:key" element={<SearchProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/submitOtp" element={<SubmitOTP />} />




        {/* <Route path="/search" element={<Search />} />
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
