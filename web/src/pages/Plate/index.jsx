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

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredients])
    setNewIngredients('')
  }

  function handleNewIngredient(oEv) {
    setNewIngredients(oEv.target.value)
  }

  function handleChangeImg(oEv) {
    const file = oEv.target.files[0]
    setPicture(file)
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    )
  }

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
