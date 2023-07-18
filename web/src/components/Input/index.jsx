import { useEffect } from 'react'
import { Container } from './style'
import { useState } from 'react'

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
