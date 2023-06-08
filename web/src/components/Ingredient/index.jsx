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
        items={[
          { id: 'alface', value: 'Alface' },
          { id: 'ameixa', value: 'Ameixa' },
          { id: 'aniz', value: 'Aniz' },
          { id: 'bacon', value: 'Bacon' },
          { id: 'cafe', value: 'Cafe' },
          { id: 'canela', value: 'Canela' },
          { id: 'castanha', value: 'Castanha' },
          { id: 'copo', value: 'Copo' },
          { id: 'damasco', value: 'Damasco' },
          { id: 'farinha', value: 'Farinha' },
          { id: 'lagosta', value: 'Lagosta' },
          { id: 'limao', value: 'Limão' },
          { id: 'maca', value: 'Maça' },
          { id: 'macarrao', value: 'Macarrão' },
          { id: 'maracuja', value: 'Maracujá' },
          { id: 'ovo', value: 'Ovo' },
          { id: 'massa', value: 'Massa' },
          { id: 'pao', value: 'Pão' },
          { id: 'pepino', value: 'Pepino' },
          { id: 'pessego', value: 'Pêssego' },
          { id: 'pesto', value: 'Pesto' },
          { id: 'rabanete', value: 'Rabanete' },
          { id: 'rucula', value: 'Rúcula' },
          { id: 'tomate', value: 'Tomate' }
        ]}
      />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
