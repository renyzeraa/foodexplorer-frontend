import { Container } from './style'
import { useState } from 'react'
import { api } from '../../services/api'
/** lidar com lista de ingredientes */
import DatalistInput from 'react-datalist-input'
/** react-icons */
import { FiPlus, FiX } from 'react-icons/fi'

/** 
 * Componente Ingredient para lidar com a entrada e seleção de ingredientes.
 * 
 * @param {boolean} isNew - Indica se é um novo ingrediente a ser adicionado.
 * @param {string} value - O valor do ingrediente selecionado.
 * @param {function} onClick - Função chamada ao clicar no botão de adicionar ingrediente.
 * @param {function} onSelect - Função chamada ao selecionar um ingrediente na lista.
 * @param {...rest} rest - Outras propriedades passadas para o componente.
 * @returns {JSX.Element} Um componente para entrada e seleção de ingredientes.
 */
export function Ingredient({ isNew, value, onClick, onSelect, ...rest }) {
  /** definição de valores */
  const [ingredients, setIngredients] = useState([])

  /** 
   * Atualiza a lista de ingredientes 
   */
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
