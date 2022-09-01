import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { AiOutlineLeft, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import molla from '../../assets/pratos/molla.png'
import rabanete from '../../assets/igredientes/rabanete.png'
import alface from '../../assets/igredientes/alface.png'
import paofeio from '../../assets/igredientes/pao.png'
import tomate from '../../assets/igredientes/tomate.png'
import { MdPieChartOutline } from 'react-icons/md'

export function Details() {
  return (
    <Container>
      <Header></Header>
      <main>
        <a href="#">
          <AiOutlineLeft /> voltar
        </a>
        <section className="content-img">
          <img src={molla} alt="" />
        </section>
        <section className="content-about">
          <h1>Salada Ravanello</h1>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>
          <div className="makings">
            <ul>
              <li>
                <img src={rabanete} alt="" />
                <p>rabanete</p>
              </li>
              <li>
                <img src={alface} alt="" />
                <p>alface</p>
              </li>
              <li>
                <img src={paofeio} alt="" />
                <p>paofeio</p>
              </li>
              <li>
                <img src={tomate} alt="" />
                <p>tomate</p>
              </li>
            </ul>
          </div>

          <div className="content-includes">
            <h1 className="price-title">R$ 19,97</h1>
            <button className="btn">
              <AiOutlineMinus />
            </button>
            <span className="count-item">00</span>
            <button className="btn">
              <AiOutlinePlus />
            </button>
            <Button title="incluir"></Button>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </Container>
  )
}
