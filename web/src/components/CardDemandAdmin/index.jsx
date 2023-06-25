import { Container } from './style'

export function CardDemandAdmin({ iPedido, sTimeStamp, sDemand, ...rest }) {
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

  return (
    <Container {...rest}>
      <header className="infos-demand">
        <span>{sPedido}</span>
        <span>{sTimeStamp}</span>
      </header>
      <span>{sDemand}</span>
      <select className="status-demand">
        <option value="0">🔴 Pendente</option>
        <option value="1">🟡 Preparando</option>
        <option value="2">🟢 Pronto</option>
      </select>
    </Container>
  )
}
