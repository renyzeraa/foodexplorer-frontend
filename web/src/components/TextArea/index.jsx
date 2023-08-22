import { Container } from './style'

/**
 * Componente TextArea
 *
 * Um componente de entrada de texto de várias linhas (textarea) encapsulado em um Container.
 *
 * @component
 * @param {string} value - O valor atual do textarea.
 * @param {object} rest - Outras propriedades passadas para o componente.
 * @returns {JSX.Element} Um componente de textarea encapsulado em um Container.
 */
export function TextArea({ value, ...rest }) {
  return <Container value={value} {...rest}></Container>
}
