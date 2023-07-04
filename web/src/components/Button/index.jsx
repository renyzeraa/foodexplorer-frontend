import { Container } from './style'

export function Button({ icon: Icon, title, count, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={20} />}
      {title}
      {count >= 0 && ` (${count})`}
    </Container>
  )
}
