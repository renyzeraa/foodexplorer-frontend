import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const arrayPedidos = [
    {
        id: 1,
        situacao: 'pendente',
        dateTime: '20/05 às 18h00',
        pedido: [
            {
                idPedido: 1,
                quantidade: 2,
                nomePedido: 'Salada Radish'
            },
            {
                idPedido: 2,
                quantidade: 1,
                nomePedido: 'Pudim'
            },
            {
                idPedido: 3,
                quantidade: 2,
                nomePedido: 'Torradas de Parma'
            }
        ]
    }
]

export function Demand() {
    return (
        <Container>
            <Header />
            <section>
                <div className="header">
                    <h1>Histórico de Pedidos</h1>
                    <Link to="/">
                        <AiOutlineLeft /> voltar
                    </Link>
                </div>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <td>Status</td>
                                <td>Código</td>
                                <td>Detalhamento</td>
                                <td>Data e hora</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p>🔴</p>
                                    Pendente
                                </td>
                                <td>04</td>
                                <td>
                                    1 x Salada Radish, 1 x Torradas de Parma, 1
                                    x Chá de Canela, 1 x Suco de Maracujá
                                </td>
                                <td>20/05 às 18h00</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>🟡</p>Preparando
                                </td>
                                <td>03</td>
                                <td>
                                    1 x Salada Radish, 1 x Torradas de Parma, 1
                                    x Chá de Canela, 1 x Suco de Maracujá
                                </td>
                                <td>20/05 às 18h00</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>🟢</p>Entregue
                                </td>
                                <td>02</td>
                                <td>
                                    1 x Salada Radish, 1 x Torradas de Parma, 1
                                    x Chá de Canela, 1 x Suco de Maracujá
                                </td>
                                <td>20/05 às 18h00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="cards-wrapper">
                    <div className="card">
                        <header>
                            <span className="number">000001</span>
                            <span>
                                <span className="status"></span>Pendente
                            </span>
                            <span className="horario">20/05 às 18h00</span>
                        </header>
                        <span className="pedido">
                            1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de
                            Canela, 1 x Suco de Maracujá
                        </span>
                    </div>
                </div>
            </section>
            <Footer />
        </Container>
    )
}
