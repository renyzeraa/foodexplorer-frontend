import { Container } from './style'

export function ItemCart() {
  return (
    <Container>
      <div className="container">
        <img src={''} alt="" />
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
