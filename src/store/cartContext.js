import React from "react";

const CartStore = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {}
});

export default CartStore;