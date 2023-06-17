import { Container } from './style'
import { useState } from 'react'
import { FiPlus, FiX } from 'react-icons/fi'
import DatalistInput from 'react-datalist-input'
import { api } from '../../services/api'

export function Ingredient({ isNew, value, onClick, onSelect, ...rest }) {
  const [ingredients, setIngredients] = useState([])

  async function updateIngredient() {
    const response = await api.get('/ingredients')
    const aIngredients = response.data.map((item, idx) => ({
      id: String(idx),
      value: item.name
    }))
    setIngredients(aIngredients)
  }

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
        onClick={updateIngredient}
        items={ingredients}
        onSelect={onSelect}
      />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
