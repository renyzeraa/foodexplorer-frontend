import { Container } from './style'
import InputWithMask from 'react-input-mask'

export function InputMask({
  sMask = '',
  placeHolder = '',
  maskPlaceholder = '',
  ...rest
}) {
  return (
    <Container>
      <InputWithMask
        placeholder={placeHolder}
        mask={sMask}
        maskChar={maskPlaceholder}
        {...rest}
      />
    </Container>
  )
}
