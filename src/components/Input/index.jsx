import { useEffect } from 'react'
import { Container } from './style'
import { useState } from 'react'

/**
 * Componente Input para renderizar um campo de entrada de dados.
 *
 * Este componente renderiza um campo de entrada de dados com a opção de incluir um ícone à esquerda.
 *
 * @param {object} props - As propriedades do componente.
 * @param {React.Component} props.Icon - O ícone a ser exibido à esquerda do campo de entrada.
 * @param {...rest} rest - Outras propriedades passadas para o componente de entrada.
 * @returns {JSX.Element} Um componente de campo de entrada.
 */
export function Input({ Icon, ...rest }) {
  const [oIcon, setIcon] = useState(false)
  useEffect(() => {
    if (Icon) {
      setIcon(Icon)
    }
  }, [])

  return (
    <Container>
      {oIcon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  )
}
