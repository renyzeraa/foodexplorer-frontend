import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CardDemand } from '../../components/CardDemand'
import { RowDemand } from '../../components/RowDemand'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { getReactToastify, oTiposToastify } from '../../methods/toastify'
import { format, parseISO } from 'date-fns'

export function Demand() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchOrders()
  }, [])

  async function fetchOrders() {
    try {
      const response = await api.get(`/orders`)
      handleOrders(response.data)
    } catch (error) {
      getReactToastify(oTiposToastify.TIPO_ERROR, 'Erro ao buscar os pedidos.')
    }
  }

  function handleOrders(aOrders) {
    aOrders = aOrders.map(oOrder => {
      const sData = parseISO(oOrder.created_at)
      const sDataFormatada = format(sData, "dd/MM 'às' HH'h'mm")

      return { ...oOrder, sData: sDataFormatada }
    })
    setOrders(aOrders)
  }

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
          {orders.map(order => (
            <CardDemand
              key={order.id}
              iPedido={order.code}
              iStatus={order.status}
              sTimeStamp={order.sData}
              sDetails={order.details}
            />
          ))}
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
              {orders.map(order => (
                <RowDemand
                  key={order.id}
                  iPedido={order.code}
                  iStatus={order.status}
                  sTimeStamp={order.sData}
                  sDetails={order.details}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </Container>
  )
}
