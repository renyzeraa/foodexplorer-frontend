import { Container } from './style'
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlinePlus,
  AiOutlineMinus
} from 'react-icons/ai'
import { TbPencil } from 'react-icons/tb'
import { Button } from '../Button'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { shoppingCart } from '../../hooks/shoppingCart'
import React, { useState } from 'react'

export function Card({
  CardId,
  title,
  price,
  img,
  description,
  onFavorite,
  isAdmin,
  fnLoading,
  amount = 0,
  isFavorite = false,
  ...rest
}) {
  const { removeProductToCart, addProductToCart, plusProductCart } =
    shoppingCart()

  const addPlateToCart = (id, iQnt) => addProductToCart(id, iQnt)
  const remPlateToCart = id => removeProductToCart(id)
  const plusThePlate = (id, iQnt) => plusProductCart(id, iQnt)

  let numberString = String(price)
  let number = Number(numberString.replace(/[.,]/g, '.'))
  let formattedValue = number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  if (parseInt(amount) > 0) {
    amount = parseInt(amount)
    if (amount <= 9) {
      amount = String('0' + amount)
    } else if (amount > 98) {
      amount = '99'
    }
    String(amount)
  }
  /**
   * Constantes do Card
   */
  const [countPlate, setCountPlate] = useState(amount || '00')
  const [favorite, setFavorite] = useState(isFavorite)
  const navigate = useNavigate()

  /**
   * Para o admin, o prato poderá ser alterado
   */
  function handlePlate(idCard) {
    fnLoading && fnLoading(true)
    navigate(`/plates/${idCard}`)
    fnLoading && fnLoading(false)
  }
  /**
   * Adiciona o prato aos favoritos do usuário
   */
  async function addFavPlate() {
    try {
      fnLoading && fnLoading(true)
      await api.post(`/favorites/favorite_plates/${CardId}`)
      fnLoading && fnLoading(false)
      alert('Prato favoritado com sucesso!')
    } catch (error) {
      fnLoading && fnLoading(false)
      if (error.response) {
        console.log(error.response.data.message)
        alert(error.response.data.message)
      } else {
        alert('Não foi possível favoritar o Prato.')
      }
      return false
    }
    return true
  }
  /**
   * Remove o prato dos favoritos
   */
  async function removeFavPlate() {
    try {
      fnLoading && fnLoading(true)
      await api.delete(`/favorites/favorite_plates/${CardId}`)
      fnLoading && fnLoading(false)
      alert('Prato removido dos favoritos com sucesso!')
    } catch (error) {
      fnLoading && fnLoading(false)
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível remover o prato.')
      }
      return false
    }
    return true
  }
  /**
   * Altera o prato como favoritado ou não
   */
  function handleFavorite() {
    let response = false
    if (!favorite) {
      // favoritar
      response = addFavPlate()
    } else {
      // des-favoritar
      response = removeFavPlate()
    }
    response && setFavorite(!favorite)
  }
  const imgPlate = img ? `${api.defaults.baseURL}files/${img}` : ''

  /**
   * Ao clicar na imagem leva ate a página de detalhes do prato
   */
  function handleDetails(idCard) {
    fnLoading && fnLoading(true)
    navigate(`/details/${idCard}`)
    fnLoading && fnLoading(false)
  }
  /**
   * Diminui a quantidade de prato
   */
  function handleMinusPlate() {
    let xValue = parseInt(countPlate)
    xValue--
    if (xValue < 1) {
      xValue = '00'
    } else if (xValue <= 9) {
      xValue = '0' + xValue
    }
    const response = remPlateToCart(CardId)
    if (response) {
      setCountPlate(String(xValue))
    } else {
      setCountPlate('01')
    }
  }
  /**
   * Aumenta a quantidade de prato
   */
  function handlePlusPlate() {
    let xValue = parseInt(countPlate)
    xValue++
    if (xValue >= 2) {
      plusThePlate(CardId)
    }
    if (xValue <= 9) {
      xValue = String('0' + xValue)
    } else if (xValue > 98) {
      xValue = '99'
    } else {
      String(xValue)
    }
    setCountPlate(xValue)
  }

  function handlePlateToCart() {
    const iAmountPlate = parseInt(countPlate)
    if (!iAmountPlate) {
      return alert(
        'Indique a quantidade de pratos que você deseja incluir ao carrinho.'
      )
    }
    addPlateToCart(CardId, iAmountPlate)
  }
  /**
   * O Componente Card
   */
  return (
    <Container {...rest} CardId={CardId}>
      <button className="btn-fav ">
        {isAdmin ? (
          <Link onClick={() => handlePlate(CardId)}>
            <TbPencil />
          </Link>
        ) : (
          <Link onClick={handleFavorite}>
            {favorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </Link>
        )}
      </button>
      <div className="container">
        <img
          src={imgPlate}
          title="Clique para saber mais sobre o Prato"
          alt=""
          onClick={() => handleDetails(CardId)}
        />

        <h1 className="product-title">{title}</h1>
        <p className="description">{description}</p>
        <h1 className="price-title">{formattedValue}</h1>
        <div className="content-includes">
          {!isAdmin && (
            <>
              <button className="btn" onClick={handleMinusPlate}>
                <AiOutlineMinus />
              </button>
              <span className="count-item">{countPlate}</span>
              <button className="btn" onClick={handlePlusPlate}>
                <AiOutlinePlus />
              </button>
              <Button title="incluir" onClick={handlePlateToCart}></Button>
            </>
          )}
        </div>
      </div>
    </Container>
  )
}
