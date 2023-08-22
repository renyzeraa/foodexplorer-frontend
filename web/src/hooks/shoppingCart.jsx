import { createContext, useContext, useState } from 'react'

export const CartContext = createContext({})

/**
 * Componente de provedor de carrinho de compras.
 *
 * Este componente fornece um contexto para gerenciar o estado do carrinho de compras
 * e realizar operações relacionadas ao carrinho de compras, como adicionar ou remover itens.
 *
 * @param {object} children - Os componentes filho que serão envolvidos pelo provedor do carrinho de compras.
 * @returns {JSX.Element} Um componente de provedor do carrinho de compras.
 */
function CartProvider({ children }) {
  /**  Definir valores */
  const [productsCart, setProductsCart] = useState([])

  /**
   * Retorna uma copia do carrinho de compras
   * @returns {Array} productsCart
   */
  const getProducts = () => {
    return [...productsCart]
  }

  /**
   * Remove todos deste id
   * @param  {integer} id
   * @returns {Array} productsCart
   */
  const removeAllFromId = id => {
    const aNewArray = productsCart.filter(item => {
      return item.id !== id
    })
    setProductsCart(aNewArray)
    return aNewArray
  }

  /**
   * Adiciona determinado item ao carrinho de compras com sua quantidade
   * @param {integer} id
   * @param {integer} iQnt
   * @returns {boolean}
   */
  const addProductToCart = (id, iQnt) => {
    const copyProductsCart = getProducts()

    const item = copyProductsCart.find(product => product.id == id)
    const iQuant = iQnt ? iQnt : 1

    if (!item) {
      copyProductsCart.push({ id: id, qtd: iQuant })
    } else {
      if (iQuant == item.qtd) {
        return false
      }
      item.qtd = iQuant
    }

    setProductsCart(copyProductsCart)

    return true
  }

  /**
   * Remove determinado produto do carrinho com base no id
   * @param {integer} id
   * @returns {boolean}
   */
  const removeProductToCart = id => {
    let copyProductsCart = getProducts()
    const item = copyProductsCart.find(product => product.id == id)

    function removeFromCart(id) {
      return copyProductsCart.filter(product => product.id != id)
    }
    if (item && item.qtd > 1) {
      if (item.qtd >= 99) {
        item.qtd = 99
      }
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
      copyProductsCart = removeFromCart(id)
      setProductsCart(copyProductsCart)
    }
    return true
  }

  /**
   * Adiciona quantidade a determinado produto do carrinho de compra
   * @param {integer} id
   * @returns {boolean}
   */
  const plusProductCart = id => {
    const copyProductsCart = getProducts()
    const item = copyProductsCart.find(product => product.id === id)

    if (!item) {
      return false
    } else {
      if (item.qtd >= 99) {
        item.qtd = 98
      }
      item.qtd = item.qtd + 1
    }
    setProductsCart(copyProductsCart)
    return true
  }

  /**
   * Limpa todo o carrinho de compras
   */
  const clearCart = () => {
    setProductsCart([])
  }

  return (
    <CartContext.Provider
      value={{
        getProducts,
        clearCart,
        removeProductToCart,
        addProductToCart,
        plusProductCart,
        removeAllFromId
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

/**
 * Cria o contexto
 * @returns {Context}
 */
const shoppingCart = () => {
  return useContext(CartContext)
}

export { CartProvider, shoppingCart }
