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
  const favorite = false
  const navigate = useNavigate()

  function handlePlate(idCard) {
    fnLoading && fnLoading(true)
    navigate(`/plates/${idCard}`)
    fnLoading && fnLoading(false)
  }
  function handleFavorite() {}
  const imgPlate = img ? `${api.defaults.baseURL}files/${img}` : ''

  function handleDetails(idCard) {
    fnLoading && fnLoading(true)
    navigate(`/details/${idCard}`)
    fnLoading && fnLoading(false)
  }

  return (
    <Container {...rest} CardId={CardId}>
      <button className="btn-fav " onClick={handleFavorite}>
        {isAdmin ? (
          <Link onClick={() => handlePlate(CardId)}>
            <TbPencil />
          </Link>
        ) : favorite ? (
          <Link>
            <AiFillHeart />
          </Link>
        ) : (
          <AiOutlineHeart />
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
              <button className="btn">
                <AiOutlineMinus />
              </button>
              <span className="count-item">00</span>
              <button className="btn">
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
