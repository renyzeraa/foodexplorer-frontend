import { Container } from './style'
import logogray from '../../assets/logo-gray.svg'

export function Footer() {
  return (
    <Container>
      <footer>
        <img src={logogray} alt="" />
        <p>© 2022 - Todos os direitos reservados.</p>
      </footer>
    </Container>
  )
}
