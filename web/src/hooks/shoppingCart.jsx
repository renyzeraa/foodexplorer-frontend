import { createContext, useContext, useState } from 'react'

export const CartContext = createContext({})

function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([])

  const addProductToCart = (id, iQnt = 0, bCheckPlate = false) => {
    const copyProductsCart = [...productsCart]
    const item = copyProductsCart.find(product => product.id === id)
    const iQuant = iQnt ? iQnt : 1
    if ((item && item.qtd == iQuant) || (!item && bCheckPlate)) {
      return
    }
    if (!item) {
      copyProductsCart.push({ id: id, qtd: iQuant })
    } else {
      item.qtd = item.qtd + iQuant
    }
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
  return useContext(CartContext)
}

export { CartProvider, shoppingCart }
