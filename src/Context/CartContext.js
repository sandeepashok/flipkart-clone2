import React, { createContext, useContext, useState } from 'react'
import { ProductContext } from './productsContext';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {

  const { productList } = useContext(ProductContext)

  const [cart, setCart] = useState([])
  const [saveForLater, setSaveForLater] = useState([])
  console.log(saveForLater)

  const addToCart = (id, count) => {
    const cartItem = cart.find((product) => {
      return product.itemId === id;
    });
    if (!cartItem) {
      const selectedItem = productList.find((product) => {
        return product.itemId === id;
      });
      const selectedItemCopy = { ...selectedItem };
      selectedItemCopy.quantity = count;
      setCart([...cart, selectedItemCopy]);

    } else {
      const updatedCartItem = cart.map((product) => {
        if (product === cartItem) {
          const selectedItemCopy = { ...product };
          if (!(selectedItemCopy.quantity === 1 && count !== 1)) {
            selectedItemCopy.quantity = selectedItemCopy.quantity + count;
          }

          return selectedItemCopy;
        }
        return product;
      });
      setCart(updatedCartItem);
    }
  };

  const removeFromCart = (id) => {
    const filteredItem = cart.filter((product) => {
      return product.itemId !== id;
    });

    setCart(filteredItem);
  };

  const addToSaveForLater = (id) => {
    const saveForLaterItemExists = saveForLater.find((product) => {
      return product.itemId === id;
    });
    if (!saveForLaterItemExists) {
      const selectedItem = cart.find((product) => {
        return product.itemId === id;
      });

      const saveForLaterCopy = [...saveForLater]
      const selectedItemCopy = { ...selectedItem };

      saveForLaterCopy.push(selectedItemCopy)
      setSaveForLater(saveForLaterCopy)

    }
  };

  const removeFromSaveForLater = (id) => {
    const filteredItem = saveForLater.filter((product) => {
      return product.itemId !== id;
    });

    setSaveForLater(filteredItem);
  };

  return (
    <CartContext.Provider value={{
      cart,
      saveForLater,
      addToCart,
      removeFromCart,
      addToSaveForLater,
      removeFromSaveForLater
    }}>
      {children}
    </CartContext.Provider>
  )
}
