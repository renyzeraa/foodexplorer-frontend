import { Container } from './style'

export function Button({ icon: Icon, title, cont, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={20} />}
      {title}
      {cont && ' (0)'}
    </Container>
  )
}
