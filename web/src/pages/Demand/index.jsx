import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CardDemand } from '../../components/CardDemand'
import { RowDemand } from '../../components/RowDemand'

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
        {/* /** mobile */}
        <div className="cards-wrapper">
          <CardDemand
            iPedido={99}
            iStatus={0}
            sTimeStamp={'22/07 às 8h00'}
            sDemand={
              '1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá'
            }
          />
        </div>
        {/* /** desktop */}
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
              <RowDemand
                iPedido={3}
                iStatus={0}
                sTimeStamp={'12/09 às 12h00'}
                sDemand={
                  '1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá'
                }
              />
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </Container>
  )
}
