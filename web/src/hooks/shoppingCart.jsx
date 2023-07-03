import { createContext, useContext, useEffect, useState } from 'react'

export const CartContext = createContext({})

function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([])

  const addProductToCart = (id, iQnt = 0) => {
    const copyProductsCart = [...productsCart]

    const item = copyProductsCart.find(product => product.id === id)

    if (!item) {
      copyProductsCart.push({ id: id, qtd: iQnt || 1 })
    } else {
      item.qtd = item.qtd + (1 || iQnt)
    }
    console.log(copyProductsCart)
    setProductsCart(copyProductsCart)
  }

  const removeProductToCart = id => {
    const copyProductsCart = [...productsCart]

    const item = copyProductsCart.find(product => product.id === id)

    if (item && item.qtd > 1) {
      item.qtd = item.qtd - 1
      setProductsCart(copyProductsCart)
    } else {
      const arrayFiltered = copyProductsCart.filter(
        product => product.id !== id
      )
      setProductsCart(arrayFiltered)
    }
  }

  const clearCart = () => {
    setProductsCart([])
  }

  return (
    <CartContext.Provider
      value={{ clearCart, removeProductToCart, addProductToCart, productsCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

const shoppingCart = () => {
  const context = useContext(CartContext)
  return context
}

export { CartProvider, shoppingCart }
