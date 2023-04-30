import { useState } from "react";

import Navbar from "./components/Layout/Navbar/Navbar";
import Header from "./components/Layout/Header/Header";
import Menu from "./components/meals/Menu";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
    <Navbar onShowCart={showCartHandler} />
    <Header />
    <Menu />
  </CartProvider>;
}

export default App;
