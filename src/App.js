import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import { createContext, useState } from "react";
import { AppContext } from "./Context";

function App() {
  // 2. Initialize Store.  creating central store for cart item count
  const [cartItems, setCartItems] = useState([]);

  // 3. Dispatchers (like postman)
  const dispatcherEvents = (actionType, payload) => {
    switch (actionType) {
      case "ADD_ITEM": {
        // setCartItems(...cartItems, payload);
        console.log(payload);
        let items = cartItems.slice();
        console.log(items.every((item) => item.id != payload.id));
        if (items.every((item) => item.id != payload.id)) {
          items.push(payload);
          setCartItems(items);
        } else {
          alert("This item already exists in cart.");
          // let index = items.findIndex((p)=> p.id === payload.id)
        }
        break;
      }
      case "UPDATE_ITEM": {
        let items = cartItems.slice();
        let index = items.findIndex((p) => p.id === payload.id);
        items[index] = payload;
        setCartItems(items);
        break;
      }
      case "DELETE_ITEM": {
        let items = cartItems.slice();
        let index = items.findIndex((p) => p.id === payload.id);
        items.splice(index, 1);
        setCartItems(items);
        break;
      }
      default: {
        console.log("INVALID...");
      }
    }
  };
  return (
    <AppContext.Provider value={{ cartItems, dispatcherEvents }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/signIn" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
