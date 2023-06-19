import { Container } from './style'

export function InputSearch({ icon: Icon, fnChange, ...rest }) {
  function handleFnSearch(oEv) {
    fnChange(oEv)
  }
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} onChange={handleFnSearch} />
    </Container>
  )
}
