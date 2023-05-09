import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { AiOutlineLeft, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import molla from '../../assets/pratos/molla.png'
import { Link } from 'react-router-dom'

export function Details({ admin = false }) {
    return (
        <Container>
            <Header admin={admin}></Header>
            <main>
                <Link to="/">
                    <AiOutlineLeft /> voltar
                </Link>
                <section className="content-img">
                    <img src={molla} alt="" />
                </section>
                <section className="content-about">
                    <h1>Salada Ravanello</h1>
                    <p>
                        Rabanetes, folhas verdes e molho agridoce salpicados com
                        gergelim.
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
