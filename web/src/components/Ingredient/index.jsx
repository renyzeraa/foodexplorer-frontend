import { Container } from './style'
import { useState } from 'react'
import { FiPlus, FiX } from 'react-icons/fi'
import DatalistInput from 'react-datalist-input'
import 'react-datalist-input/dist/styles.css'

export function Ingredient({ isNew, value, onClick, ...rest }) {
  const [ingredients, setIngredients] = useState([])

  return (
    <Container isNew={isNew}>
      <DatalistInput
        value={value}
        inputProps={{
          readOnly: !isNew,
          disabled: !isNew
        }}
        inputMode="text"
        {...rest}
        placeholder="Digite"
        onSelect={item => setIngredients([...ingredients, item.value])}
        items={[]}
      />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
