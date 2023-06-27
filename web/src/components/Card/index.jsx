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
import { useState } from 'react'
export function Card({
  CardId,
  title,
  price,
  img,
  description,
  onFavorite,
  isAdmin,
  fnLoading,
  ...rest
}) {
  const [countPlate, setCountPlate] = useState('00')
  const [favorite, setFavorite] = useState(false)
  const navigate = useNavigate()

  function handlePlate(idCard) {
    fnLoading && fnLoading(true)
    navigate(`/plates/${idCard}`)
    fnLoading && fnLoading(false)
  }

  async function addFavPlate() {
    try {
      fnLoading && fnLoading(true)
      await api.get(`/favorites/favorite_plates/${CardId}`)
      fnLoading && fnLoading(false)
      alert('Prato favoritado com sucesso!')
    } catch (error) {
      fnLoading && fnLoading(false)
      console.error(error)
    }
  }
  async function removeFavPlate() {
    try {
      fnLoading && fnLoading(true)
      await api.delete(`/favorites/favorite_plates`, CardId)
      fnLoading && fnLoading(false)
      alert('Prato removido dos favoritos com sucesso!')
    } catch (error) {
      fnLoading && fnLoading(false)
      console.error(error.message)
    }
  }

  function handleFavorite() {
    if (!favorite) {
      // favoritar
      addFavPlate()
    } else {
      // des-favoritar
      removeFavPlate()
    }
    setFavorite(!favorite)
  }
  const imgPlate = img ? `${api.defaults.baseURL}files/${img}` : ''

  function handleDetails(idCard) {
    fnLoading && fnLoading(true)
    navigate(`/details/${idCard}`)
    fnLoading && fnLoading(false)
  }

  function handleMinusPlate() {
    let xValue = parseInt(countPlate)
    xValue--
    if (xValue < 1) {
      xValue = '00'
    } else if (xValue <= 9) {
      xValue = '0' + xValue
    } else if (xValue > 98) {
      xValue = '99'
    }
    setCountPlate(String(xValue))
  }
  function handlePlusPlate() {
    let xValue = parseInt(countPlate)
    xValue++
    if (xValue <= 9) {
      xValue = String('0' + xValue)
    } else {
      String(xValue)
    }
    setCountPlate(xValue)
  }

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
        <h1 className="price-title">R$ {price}</h1>
        <div className="content-includes">
          {isAdmin ? (
            []
          ) : (
            <>
              <button className="btn" onClick={handleMinusPlate}>
                <AiOutlineMinus />
              </button>
              <span className="count-item">{countPlate}</span>
              <button className="btn" onClick={handlePlusPlate}>
                <AiOutlinePlus />
              </button>
              <Button title="incluir"></Button>
            </>
          )}
        </div>
      </div>
    </Container>
  )
}
