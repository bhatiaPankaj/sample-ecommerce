import ShopContext  from "./ShopContext";
import all_product  from "../../assets/all_product";
import { useState } from "react";

const ShopState = (props)=>{
    const all_products = all_product;

    const [cartItems, setCartItems] = useState(getDefaultCart());

    function getDefaultCart (){
    let cart = {}
    for(let i = 0; i< all_products.length;i++){
        cart[i]= 0;
    }
    return cart;
}

  function getTotalItems(){
    let totalItems = 0;
    for(let item in cartItems){
      if(cartItems[item]>0){
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  }

function addToCart(itemId){

  setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId]+1 }));

}
function removeFromCart(itemId) {
  setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
}

// function declarations are hoisted




    return (
      <ShopContext.Provider
        value={{
          all_products,
          cartItems,
          addToCart,
          removeFromCart,
          getTotalItems,
        }}
      >
        {props.children}
      </ShopContext.Provider>
    );
}

export default ShopState;

