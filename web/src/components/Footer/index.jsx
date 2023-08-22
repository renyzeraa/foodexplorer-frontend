import { Container } from './style'
import logogray from '../../assets/logo-gray.svg'

/**
 * Componente Footer para exibir o rodapé da página.
 *
 * Este componente renderiza o logotipo em tons de cinza e o texto de direitos autorais no rodapé da página.
 *
 * @returns {JSX.Element} Um componente de rodapé.
 */
export function Footer() {
  return (
    <Container>
      <footer className='container-footer'>
        <img src={logogray} alt="" />
        <p className='text-area-footer'>© 2022 - Todos os direitos reservados.</p>
      </footer>
    </Container>
  )
}
