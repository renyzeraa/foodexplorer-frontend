import { useRef } from 'react'
import { Container } from './style'
import InputWithMask from 'react-input-mask'

export function InputMask({
  sMask = '',
  placeHolder = '',
  maskPlaceholder = '',
  fnOnChange = false,
  ...rest
}) {
  const inputRef = useRef(null)
  const handleChange = () => {
    if (inputRef.current) {
      const inputElement = inputRef.current
      fnOnChange && fnOnChange(inputElement.value)
    }
  }

  return (
    <Container>
      <InputWithMask
        ref={inputRef}
        placeholder={placeHolder}
        mask={sMask}
        maskChar={maskPlaceholder}
        onChange={handleChange}
        {...rest}
      />
    </Container>
  )
}
