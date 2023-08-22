import { useState } from 'react'
import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Ingredient } from '../../components/Ingredient'
import { TextArea } from '../../components/TextArea'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineLeft, AiOutlineUpload } from 'react-icons/ai'
import { Loading } from '../../components/Loading'
import { api } from '../../services/api'
import { Button } from '../../components/Button'
import { getReactToastify, oTiposToastify } from '../../methods/toastify'
import { InputMask } from '../../components/InputMask'

/**
 * Componente Plate para criar ou editar um prato.
 *
 * Este componente é usado para criar ou editar um prato, permitindo que o usuário
 * insira detalhes como título, categoria, valor, ingredientes e descrição do prato.
 * Ele também lida com a submissão de formulários para criar ou editar pratos.
 *
 * @returns {JSX.Element} Um componente para criar ou editar pratos.
 */
export function Plate({}) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [picture, setPicture] = useState()

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [value, setValue] = useState()
  const [category, setCategory] = useState(1)

  const [ingredients, setIngredients] = useState([])
  const [newIngredients, setNewIngredients] = useState('')

  /**
   * Função para criar um novo prato.
   *
   * Esta função é usada para criar um novo prato com base nas informações fornecidas,
   * como título, ingredientes, valor, descrição e imagem. Ela realiza validações
   * para garantir que todas as informações necessárias sejam fornecidas e envia uma
   * solicitação de criação do prato para a API.
   *
   * @param {Event} e - O evento de submissão do formulário.
   */
  async function handleNewPlate(e) {
    e.preventDefault()
    
    if (!title) {
      return getReactToastify(
        oTiposToastify.TIPO_ERROR,
        'É necessário inserir um nome ao Prato!'
      )
    }
    if (newIngredients) {
      return getReactToastify(
        oTiposToastify.TIPO_ALERT,
        'Possui um ingrediente não inserido!'
      )
    }
    if (!ingredients.length) {
      return getReactToastify(
        oTiposToastify.TIPO_ALERT,
        'É necessário inserir pelo menos um ingrediente ao Prato!'
      )
    }
    if (!value) {
      return getReactToastify(
        oTiposToastify.TIPO_ALERT,
        'É valor do Prato é obrigatório!'
      )
    }
    if (!description) {
      return getReactToastify(
        oTiposToastify.TIPO_ALERT,
        'É obrigatório ter uma descrição do Prato!'
      )
    }
    const oFormData = new FormData()
    oFormData.append('title', title)
    oFormData.append('description', description)
    let iValue = value
    if (typeof iValue == 'string') {
      iValue = Number(iValue.slice(3).replace(',', '.'))
    }
    oFormData.append('value', iValue)
    oFormData.append('ingredients', ingredients.join(','))
    oFormData.append('category', category)
    oFormData.append('picture', picture)
    oFormData.append('Content-Type', 'multipart/form-data')

    try {
      setLoading(true)
      await api.post('/plates', oFormData)
      navigate('/')
      setLoading(false)
      getReactToastify(
        oTiposToastify.TIPO_SUCCESS,
        'Prato criado com sucesso !'
      )
    } catch (error) {
      setLoading(false)
      getReactToastify(oTiposToastify.TIPO_ERROR, 'Erro ao salvar o Prato !')
    }
  }

  /**
   * Adiciona um novo ingrediente à lista de ingredientes.
   *
   * Esta função adiciona o valor contido em `newIngredients` à lista de ingredientes existente.
   * Ela atualiza o estado de `ingredients` com a nova lista de ingredientes e limpa o valor em `newIngredients`.
   */
  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredients])
    setNewIngredients('')
  }

  /**
   * Atualiza o estado `newIngredients` com o valor do evento.
   *
   * Esta função é chamada quando há uma mudança em um campo de entrada de novo ingrediente.
   * Ela atualiza o estado `newIngredients` com o valor do evento, que normalmente é o valor do campo de entrada.
   *
   * @param {object} oEv - O evento de mudança ocorrido no campo de entrada.
   */
  function handleNewIngredient(oEv) {
    setNewIngredients(oEv.target.value)
  }

  /**
   * Atualiza o estado `picture` com o arquivo de imagem selecionado.
   *
   * Esta função é chamada quando um arquivo de imagem é selecionado por meio de um campo de entrada de arquivo.
   * Ela atualiza o estado `picture` com o arquivo de imagem selecionado.
   *
   * @param {object} oEv - O evento de mudança ocorrido no campo de entrada de arquivo.
   */
  function handleChangeImg(oEv) {
    const file = oEv.target.files[0]
    setPicture(file)
  }

  /**
   * Remove um ingrediente da lista de ingredientes.
   *
   * Esta função recebe um ingrediente a ser removido e atualiza o estado `ingredients`
   * removendo o ingrediente da lista atual.
   *
   * @param {string} deleted - O ingrediente a ser removido.
   */
  function handleRemoveIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    )
  }

  /**
   * Atualiza o estado `newIngredients` com o valor de um item selecionado.
   *
   * Esta função é usada quando um item é selecionado, como em uma lista de seleção.
   * Ela atualiza o estado `newIngredients` com o valor do item selecionado.
   *
   * @param {object} oItem - O item selecionado.
   */
  function handleSelectItem(oItem) {
    setNewIngredients(oItem.value)
  }

  return (
    <Container>
      {loading && <Loading></Loading>}
      <Header admin />
      <section>
        <div className="header">
          <Link to="/">
            <AiOutlineLeft /> voltar
          </Link>
          <h1>
            <p>Novo prato</p>
          </h1>
        </div>
        <form
          className="content-wrapper"
          action=""
          onSubmit={oEv => {
            oEv.preventDefault()
          }}
        >
          <div className="content">
            <div className="content-img">
              <label htmlFor="">Imagem do prato</label>
              <label htmlFor="product">
                <AiOutlineUpload />
                <p>Selecione imagem</p>
                <input type="file" id="product" onChange={handleChangeImg} />
              </label>
            </div>
            <div className="name-category">
              <label htmlFor="">Nome</label>
              <Input
                type="text"
                placeholder="Ex.: Salada Ceasar"
                onChange={oEv => setTitle(oEv.target.value)}
              />
              <label htmlFor="">Categoria</label>
              <select
                name=""
                id=""
                onChange={oEv => setCategory(oEv.target.value || 1)}
              >
                <option value="1">Refeição</option>
                <option value="2">Sobremesa</option>
                <option value="3">Doces</option>
                <option value="4">Bebidas</option>
              </select>
            </div>
          </div>
          <div className="price-ingredientes">
            <div className="content-ingredientes">
              <label htmlFor="">Ingredientes</label>
              <div className="ingredient">
                {ingredients.map((ingredient, iDx) => (
                  <Ingredient
                    key={String(iDx)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}
                <Ingredient
                  isNew
                  placeholder="Adicionar"
                  value={newIngredients}
                  onChange={handleNewIngredient}
                  onClick={handleAddIngredient}
                  onSelect={oItem => handleSelectItem(oItem)}
                />
              </div>
            </div>
            <div className="price">
              <label htmlFor="">Preço</label>
              <InputMask
                sMask="R$ 99,99"
                placeHolder="R$ 99,99"
                maskPlaceholder="0"
                value={value}
                fnOnChange={setValue}
              ></InputMask>
            </div>
          </div>

          <div>
            <label htmlFor="">Descrição</label>
            <TextArea
              placeholder="Fale brevemente sobre o prato. Exemplo: Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."
              onChange={oEv => setDescription(oEv.target.value)}
            />
          </div>
          <div className="button-submit">
            <Button
              className="submit"
              title="Criar Prato"
              onClick={handleNewPlate}
            />
          </div>
        </form>
      </section>
      <Footer />
    </Container>
  )
}
