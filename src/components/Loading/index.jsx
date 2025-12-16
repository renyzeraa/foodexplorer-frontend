import { Container } from './style'

/**
 * Componente Loading para exibir um indicador de carregamento ao realizar alguma requisição na aplicação.
 *
 * Este componente exibe um indicador visual de carregamento, como um spinner, juntamente com um texto "Aguarde...".
 *
 * @returns {JSX.Element} Um componente de indicador de carregamento.
 */
export function Loading() {
  return (
    <Container>
      <div className="loading-spinner"></div>
      <p>Aguarde...</p>
    </Container>
  )
}
