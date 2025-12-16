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

/**
 * Página de exibição de pedidos.
 *
 * Esta página exibe uma lista de pedidos, incluindo detalhes como número do pedido,
 * status, horário e detalhes. Os pedidos são recuperados da API e exibidos em
 * componentes de cartão (CardDemand) e linhas (RowDemand).
 */
export function Demand() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchOrders()
  }, [])

  /**
   * Função assíncrona para buscar pedidos da API e lidar com a resposta.
   *
   * Esta função utiliza a biblioteca Axios para fazer uma solicitação GET à API para buscar pedidos.
   * Se a solicitação for bem-sucedida, ela chama a função `handleOrders` para lidar com os dados dos pedidos.
   * Se a solicitação falhar, uma notificação de erro é exibida usando a função `getReactToastify`.
   */
  async function fetchOrders() {
    try {
      const response = await api.get(`/orders`)
      handleOrders(response.data)
    } catch (error) {
      getReactToastify(oTiposToastify.TIPO_ERROR, 'Erro ao buscar os pedidos.')
    }
  }

  /**
   * Função para processar e formatar a data e hora de pedidos.
   *
   * Esta função recebe uma matriz de pedidos `aOrders` e formata a data e hora de cada pedido.
   *
   * @param {array} aOrders - Uma matriz de objetos de pedido, cada um contendo uma propriedade `created_at` com um valor de data e hora.
   */
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
              iStatus={order.status_id}
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
            <tbody className='rows-demands'>
              {orders.map(order => (
                <RowDemand
                  key={order.id}
                  iPedido={order.code}
                  iStatus={order.status_id}
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
