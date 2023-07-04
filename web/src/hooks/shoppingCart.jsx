import { createContext, useContext, useState } from 'react'

export const CartContext = createContext({})

function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([])

  const addProductToCart = (
    id,
    iQnt = 0,
    bCheckPlate = false,
    bCheckQnt = false
  ) => {
    const copyProductsCart = [...productsCart]
    const item = copyProductsCart.find(product => product.id === id)
    const iQuant = iQnt ? iQnt : 1
    if ((item && item.qtd == iQuant && !bCheckQnt) || (!item && bCheckPlate)) {
      return false
    }
    if (!item) {
      copyProductsCart.push({ id: id, qtd: iQuant })
    } else {
      item.qtd = item.qtd + iQuant
    }

    setProductsCart(copyProductsCart)
    return true
  }

  const removeProductToCart = id => {
    const copyProductsCart = [...productsCart]
    const item = copyProductsCart.find(product => product.id === id)

    if (item && item.qtd > 1) {
      item.qtd = item.qtd - 1
      setProductsCart(copyProductsCart)
    } else {
      if (item && item.id) {
        const response = window.confirm(
          'Deseja realmente remover este produto do carrinho de compras ?'
        )
        if (!response) {
          return false
        }
      }
      const arrayFiltered = copyProductsCart.filter(
        product => product.id !== id
      )
      setProductsCart(arrayFiltered)
    }
    return true
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
