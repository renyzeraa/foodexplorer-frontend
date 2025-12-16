import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { Row } from './style'

/**
 * Componente RowDemand para exibir uma linha de informações de um pedido.
 *
 * Este componente é usado para representar uma linha de informações de um pedido,
 * incluindo o número do pedido, o status, o horário e detalhes.
 *
 * @param {number} iPedido - O número do pedido.
 * @param {number} iStatus - O status do pedido.
 * @param {string} sTimeStamp - O horário do pedido.
 * @param {string} sDetails - Os detalhes do pedido.
 * @param {object} rest - Outras propriedades passadas para o componente.
 * @returns {JSX.Element} Um componente de linha de informações de pedido.
 */
export function RowDemand({
  iPedido = 0,
  iStatus = 0,
  sTimeStamp = '',
  sDetails = '',
  ...rest
}) {
  /** Definir para admin ou user normal*/
  const { user } = useAuth()
  const admin = user.isAdmin
  /** Definir valores */
  const [value, setValue] = useState(iStatus)
  // ajustar cor e nome do status do pedido
  // Formatar o número do pedido com zeros à esquerda
  const formattedPedido = iPedido.toString().padStart(6, '0')

  const statusOptions = [
    { value: 1, emoji: '🔴', name: 'Pendente' },
    { value: 2, emoji: '🟡', name: 'Preparando' },
    { value: 3, emoji: '🟢', name: 'Entregue' },
  ]

  /**
   * Lidar com a mudança de status do pedido
   * @param {number} newValue - O novo valor de status selecionado.
   */
  function handleSelectValue(newValue) {
    setValue(newValue)
  }

  return (
    <Row {...rest}>
      <td className="status">
        {admin ? (
          <select
            value={value}
            onChange={(e) => handleSelectValue(e.target.value)}
            className="select-status"
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {`${option.emoji} ${option.name}`}
              </option>
            ))}
          </select>
        ) : (
          `${statusOptions.find((option) => option.value === iStatus)?.emoji} ${
            statusOptions.find((option) => option.value === iStatus)?.name
          }`
        )}
      </td>
      <td>{formattedPedido}</td>
      <td>{sDetails}</td>
      <td>{sTimeStamp}</td>
    </Row>
  )
}