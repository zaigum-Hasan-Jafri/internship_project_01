import {
  Routes,
  Route,
} from "react-router-dom";
// import './App.css';
import "./pages/Login/Login.css"
import Home from "./pages/Home/Home";
import BasicForm from "./pages/BasicForm";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Lists from "./pages/Main/Lists";
import Restaurant from "./pages/Restaurant/Restaurant";
import Cart from "./components/Cart/Cart";
// const img = require("./Assets/signIn.jpg")
function App() {
  // console.log(img);
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/basicform" element={<BasicForm />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/restaurants" element={<Lists />} />
        <Route path="/restaurant/:city_name" element={<Restaurant />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
