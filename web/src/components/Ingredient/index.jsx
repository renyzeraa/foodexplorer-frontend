import { Container } from './style'
import { useState } from 'react'
import { FiPlus, FiX } from 'react-icons/fi'
import DatalistInput from 'react-datalist-input'
import 'react-datalist-input/dist/styles.css'

export function Ingredient({ isNew, value, onClick, ...rest }) {
  const [ingredients, setIngredients] = useState([])
  console.log(ingredients)

  return (
    <Container isNew={isNew}>
      <DatalistInput
        value={value}
        inputProps={{
          readOnly: !isNew
        }}
        {...rest}
        placeholder="Selecione"
        onSelect={item => setIngredients([...ingredients, item.value])}
        items={[
          { id: 'alface', value: 'Alface' },
          { id: 'ameixa', value: 'Ameixa' },
          { id: 'Mint', value: 'Mint' },
          { id: 'Strawberry', value: 'Strawberry' },
          { id: 'Vanilla', value: 'Vanilla' }
        ]}
      />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
