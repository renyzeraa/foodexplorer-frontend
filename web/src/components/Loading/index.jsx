import { Container } from './style'

export function Loading() {
  return (
    <Container>
      <div className="loading-spinner"></div>
      <p>Aguarde...</p>
    </Container>
  )
}
