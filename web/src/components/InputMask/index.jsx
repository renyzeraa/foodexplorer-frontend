import { Container } from './style'
import InputWithMask from 'react-input-mask'

export function InputMask({
  sMask = '',
  placeHolder = '',
  maskPlaceholder = '',
  fnOnChange = false,
  ...rest
}) {
  const handleChange = oEv => {
    fnOnChange && fnOnChange(oEv.target.value)
  }

  return (
    <Container>
      <InputWithMask
        placeholder={placeHolder}
        mask={sMask}
        maskChar={maskPlaceholder}
        onChange={handleChange}
        {...rest}
      />
    </Container>
  )
}
