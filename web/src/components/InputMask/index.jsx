import { Container } from './style'
import InputWithMask from 'react-input-mask'

export function InputMask({
  Icon = false,
  sMask = '',
  placeHolder = '',
  maskPlaceholder = '',
  ...rest
}) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <InputWithMask
        placeholder={placeHolder}
        mask={sMask}
        maskChar={maskPlaceholder}
        {...rest}
      />
    </Container>
  )
}
