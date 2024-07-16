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
import Store360 from './pages/Store360/Store360';
import Design from './pages/Design/Design';
import ProductSale from './pages/Product/ProductSale';
import ReactGA from "react-ga4";
import PageNotFound from './pages/404/PageNotFound';

function initializeReactGA() {
  ReactGA.initialize('G-RDWGZG06CJ'); // Thay 'UA-XXXXXXXXX-X' bằng ID của Google Analytics của bạn
  // ReactGA.pageview(window.location.pathname + window.location.search);
}

initializeReactGA();

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store360" element={<Store360 />} />
        <Route path="/design" element={<Design />} />
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
        <Route path="/sale" element={<ProductSale />} />
        <Route path="/search/:key" element={<SearchProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/submitOtp" element={<SubmitOTP />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
