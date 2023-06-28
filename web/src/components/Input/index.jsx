import { Container } from './style'

export function Input({ Icon = false, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input defaultValue={' '} {...rest} />
    </Container>
  )
}
