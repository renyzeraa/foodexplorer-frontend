import { Container } from './style'

/**
 * Componente de Botão.
 * 
 * Este componente representa um botão que pode incluir um ícone, um título e um contador opcional.
 * 
 * @param {object} props - As propriedades do componente.
 * @param {React.Component} props.icon - O ícone a ser exibido no botão (opcional).
 * @param {string} props.title - O texto a ser exibido no botão.
 * @param {number} props.count - O contador a ser exibido ao lado do título (opcional).
 * @param {object} rest - Outras propriedades que podem ser passadas para o elemento <button>.
 * @returns {JSX.Element} - O componente de botão renderizado.
 */
export function Button({ icon: Icon, title, count, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={20} />}
      {title}
      {count >= 0 && ` (${count})`}
    </Container>
  )
}
