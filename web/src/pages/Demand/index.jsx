import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { AiOutlineLeft } from 'react-icons/ai'

export function Demand() {
  return (
    <Container>
      <Header />
      <section>
        <div className="header">
          <h1>Pedidos</h1>
          <a href="#">
            <AiOutlineLeft /> voltar
          </a>
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
                  1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1
                  x Suco de Maracujá
                </td>
                <td>20/05 às 18h00</td>
              </tr>
              <tr>
                <td>
                  <p>🟡</p>Preparando
                </td>
                <td>03</td>
                <td>
                  1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1
                  x Suco de Maracujá
                </td>
                <td>20/05 às 18h00</td>
              </tr>
              <tr>
                <td>
                  <p>🟢</p>Entregue
                </td>
                <td>02</td>
                <td>
                  1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1
                  x Suco de Maracujá
                </td>
                <td>20/05 às 18h00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </Container>
  )
}
