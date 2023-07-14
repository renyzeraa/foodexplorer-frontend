import { Container } from './style'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

export function CardDemand({
  iPedido = 0,
  iStatus = 0,
  sTimeStamp = '',
  sDetails = '',
  ...rest
}) {
  /** Definir para admin */
  const { user } = useAuth()
  const admin = user.isAdmin
  /** definição de valores */
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
   * Definir o status do pedido
   * @param {Mixed} xValue
   */
  function handleSelectValue(xValue) {
    setValue(xValue)
  }

  return (
    <Container {...rest}>
      <header className={admin ? 'infos-demand admin' : 'infos-demand'}>
        <span>{sPedido}</span>
        {!admin && (
          <span>
            <span>{sStatus}</span> {sStatusName}
          </span>
        )}
        <span>{sTimeStamp}</span>
      </header>
      <span className={admin ? 'demand-text' : ''}>{sDetails}</span>
      {admin && (
        <select
          className="status-demand"
          value={value}
          onChange={e => handleSelectValue(e.target.value)}
        >
          <option value="0">🔴 Pendente</option>
          <option value="1">🟡 Preparando</option>
          <option value="2">🟢 Pronto</option>
        </select>
      )}
    </Container>
  )
}
