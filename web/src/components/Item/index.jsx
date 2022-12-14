import { Container } from './style'
import molla from '../../assets/pratos/molla.png'

export function Item() {
  return (
    <Container>
      <div className="container">
        <img src={molla} alt="" />
        <section>
          <div className="content">
            <p>
              <span className="count">1</span>x Salada Radish
              <span className="price">
                R$ <span className="value">25,97</span>
              </span>
            </p>
          </div>
          <button>Excluir</button>
        </section>
      </div>
    </Container>
  )
}
