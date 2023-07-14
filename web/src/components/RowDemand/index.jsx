import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { Row } from './style'

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
  let sStatus = '🔴'
  let sStatusName = 'Pendente'
  if (iStatus == 1) {
    sStatus = '🟡'
    sStatusName = 'Preparando'
  } else if (iStatus == 2) {
    sStatus = '🟢'
    sStatusName = 'Pronto'
  }
  // ajustar número do pedido
  let sPedido = ''
  if (iPedido <= 9) {
    sPedido = `00000${iPedido}`
  } else if (iPedido <= 99) {
    sPedido = `0000${iPedido}`
  } else if (iPedido <= 999) {
    sPedido = `000${iPedido}`
  } else if (iPedido <= 9999) {
    sPedido = `00${iPedido}`
  } else if (iPedido <= 99999) {
    sPedido = `0${iPedido}`
  } else {
    sPedido = String(iPedido)
  }

  /**
   * Lidar com o status do pedido atual
   * @param {mixed} xValue
   */
  function handleSelectValue(xValue) {
    setValue(xValue)
  }

  return (
    <Row {...rest}>
      <td className="status">
        {admin ? (
          <select
            value={value}
            onChange={e => handleSelectValue(e.target.value)}
            className="select-status"
          >
            <option value="0">🔴 Pendente</option>
            <option value="1">🟡 Preparando</option>
            <option value="2">🟢 Entregue</option>
          </select>
        ) : (
          <span>
            {sStatus} {sStatusName}
          </span>
        )}
      </td>
      <td>{sPedido}</td>
      <td>{sDetails}</td>
      <td>{sTimeStamp}</td>
    </Row>
  )
}
