import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { AiOutlineLeft, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function Details({}) {
  const { user } = useAuth()
  const admin = user.isAdmin
  return (
    <Container>
      <Header admin={admin}></Header>
      <main>
        <Link to="/">
          <AiOutlineLeft /> voltar
        </Link>
        <section className="content-img">
          <img src={''} alt="" />
        </section>
        <section className="content-about">
          <h1>Salada Ravanello</h1>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>
          <ul className="makings">
            <li>tomate</li>
            <li>tomate</li>
            <li>tomate</li>
            <li>tomate</li>
            <li>tomate</li>
            <li>tomate</li>
          </ul>
          {admin ? (
            <Button title="Editar prato"></Button>
          ) : (
            <div className="content-includes">
              <button className="btn">
                <AiOutlineMinus />
              </button>
              <span className="count-item">00</span>
              <button className="btn">
                <AiOutlinePlus />
              </button>
              <Button title="Incluir"></Button>
            </div>
          )}
        </section>
      </main>
      <Footer></Footer>
    </Container>
  )
}
