import { Container } from './style'
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlinePlus,
  AiOutlineMinus
} from 'react-icons/ai'
import { Button } from '../Button'

export function Card({ title, price, img, description, ...rest }) {
  return (
    <Container {...rest}>
      <button className="btn-fav">
        <AiOutlineHeart />
      </button>
      <div className="container">
        <img src={img} alt="" />
        <h1 className="product-title">{title}</h1>
        <p className="description">{description}</p>
        <h1 className="price-title">R$ {price}</h1>
        <div className="content-includes">
          <button className="btn">
            <AiOutlineMinus />
          </button>
          <span className="count-item">00</span>
          <button className="btn">
            <AiOutlinePlus />
          </button>
          <Button title="incluir"></Button>
        </div>
      </div>
    </Container>
  )
}
