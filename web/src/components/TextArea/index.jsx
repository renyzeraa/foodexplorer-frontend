import { Container } from './style'

export function TextArea({ value, ...rest }) {
  return <Container value={value} {...rest}></Container>
}
