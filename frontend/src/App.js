import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import OrderScreen from "./Screens/OrderScreen";
import UserListScreen from "./Screens/UserListScreen";
import UserEditScreen from "./Screens/UserEditScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            {/* this thing make /:id optional if we only use /cart then also it work */}
            <Route path="/cart">
              <Route path="" element={<CartScreen />} />
              <Route path=":id" element={<CartScreen />} />
            </Route>
            <Route path="/admin/userList" element={<UserListScreen />} />
            <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
