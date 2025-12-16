import { useRef } from 'react'
import { Container } from './style'
import InputWithMask from 'react-input-mask'

/**
 * Componente InputMask para entrada de texto com máscara.
 *
 * Este componente permite a entrada de texto com uma máscara especificada.
 *
 * @param {string} sMask - A máscara que define o formato da entrada.
 * @param {string} placeHolder - O texto de espaço reservado exibido quando o campo está vazio.
 * @param {string} maskPlaceholder - O caractere de máscara a ser exibido em campos vazios.
 * @param {function} fnOnChange - Uma função de retorno de chamada para lidar com mudanças no valor.
 * @param {object} rest - Outras propriedades passadas para o componente de entrada.
 * @returns {JSX.Element} Um componente de entrada de texto com máscara.
 */
export function InputMask({
  sMask = '',
  placeHolder = '',
  maskPlaceholder = '',
  fnOnChange = false,
  ...rest
}) {
  // inputRef do componente
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
