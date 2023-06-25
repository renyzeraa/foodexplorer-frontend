import { Container } from './style'

export function CardDemand({ iPedido, iStatus, sTimeStamp, sDemand, ...rest }) {
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

  return (
    <Container {...rest}>
      <header className="infos-demand">
        <span>{sPedido}</span>
        <span>
          <span>{sStatus}</span> {sStatusName}
        </span>
        <span>{sTimeStamp}</span>
      </header>
      <span>{sDemand}</span>
    </Container>
  )
}
