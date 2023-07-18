import { useState, useEffect } from 'react'
import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { InputMask } from '../../components/InputMask'
import { Ingredient } from '../../components/Ingredient'
import { TextArea } from '../../components/TextArea'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AiOutlineLeft, AiOutlineUpload } from 'react-icons/ai'
import { Loading } from '../../components/Loading'
import { api } from '../../services/api'
import { Button } from '../../components/Button'
import { getReactToastify, oTiposToastify } from '../../methods/toastify'

export function EditPlate({}) {
  const params = useParams()
  const navigate = useNavigate()
  let ingredientsBd = []
  let bIsActualized = false
  const [picture, setPicture] = useState()

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [value, setValue] = useState()
  const [categories, setCategories] = useState()

  const [ingredients, setIngredients] = useState([])
  const [newIngredients, setNewIngredients] = useState('')

  const [loading, setLoading] = useState(false)

  function handlePlate(plate) {
    if (bIsActualized) {
      return
    }
    setTitle(plate.title)
    setCategories(plate.category_id)
    let xValue = plate.value
    if (typeof xValue == 'string') {
      if (!xValue.includes('R$')) {
        if (parseInt(xValue) < 10) {
          xValue = `0${xValue}`.replace('.', ',')
        }
        xValue = `R$ ${xValue}`
      }
    } else {
      if (xValue < 10) {
        xValue = `0${xValue}`.replace('.', ',')
      }
      xValue = `R$ ${xValue}`
    }

    setValue(xValue)
    if (!ingredients.length) {
      const aIngredients = JSON.parse(plate.ingredients)
      for (let item of aIngredients) {
        const sName = ingredientsBd[item].name
        setIngredients(prevState => [...prevState, sName])
      }
    }
    const sDescricao = String(plate.description)
    setDescription(sDescricao)
  }

  useEffect(() => {
    async function fetchPlate() {
      try {
        setLoading(true)
        let response = await api.get('/ingredients')
        ingredientsBd = response.data
        response = await api.get(`/plates/${params.id}`)
        handlePlate(response.data)
        setLoading(false)
        bIsActualized = true
      } catch (error) {
        setLoading(false)
        getReactToastify(
          oTiposToastify.TIPO_ERROR,
          'Não foi possível atualizar o Prato atual !'
        )
      }
    }
    fetchPlate()
  }, [])

  async function handleUpdate(e) {
    e.preventDefault()

    if (!title) {
      return getReactToastify(
        oTiposToastify.TIPO_ALERT,
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
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    let iValue = value
    if (typeof iValue == 'string') {
      iValue = Number(iValue.slice(3).replace(',', '.'))
    }
    formData.append('value', iValue)
    formData.append('ingredients', ingredients.join(','))
    formData.append('category_id', String(categories))
    if (typeof picture == 'object') {
      formData.append('picture', picture)
    }
    formData.append('Content-Type', 'application/json')

    try {
      setLoading(true)
      await api.put(`/plates/${params.id}`, formData)
      navigate('/')
      setLoading(false)
      getReactToastify(
        oTiposToastify.TIPO_SUCCESS,
        'Prato atualizado com sucesso!'
      )
    } catch (error) {
      setLoading(false)
      getReactToastify(
        oTiposToastify.TIPO_ERROR,
        'Erro ao enviar ao atualizar Prato!'
      )
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

  async function handleRemovePlate() {
    const confirm = window.confirm('Deseja realmente deletar este prato?')
    if (confirm) {
      try {
        setLoading(true)
        await api.delete(`/plates/${params.id}`)
        getReactToastify(
          oTiposToastify.TIPO_SUCCESS,
          'Prato excluído com sucesso !'
        )
        navigate('/')
        setLoading(false)
      } catch (error) {
        setLoading(false)
        getReactToastify(
          oTiposToastify.TIPO_ERROR,
          'Não foi possível excluir o Prato.'
        )
      }
    }
  }

  return (
    <Container>
      {loading && <Loading />}
      <Header admin />
      <section>
        <div className="header">
          <Link to="/">
            <AiOutlineLeft /> voltar
          </Link>
          <h1>
            <p>Editar prato</p>
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
                <p>Selecione imagem para alterá-la</p>
                <input type="file" id="product" onChange={handleChangeImg} />
              </label>
            </div>
            <div className="name-category">
              <label htmlFor="">Nome</label>
              <Input
                type="text"
                value={title}
                placeholder="Ex.: Salada Ceasar"
                onChange={oEv => setTitle(oEv.target.value)}
              />
              <label htmlFor="">Categoria</label>
              <select
                value={categories}
                onChange={oEv => setCategories(oEv.target.value)}
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
              value={description}
              onChange={oEv => setDescription(oEv.target.value)}
            />
          </div>
          <div className="button-submit">
            <div className="edit-plate">
              <Button
                className="delete"
                title="Excluir prato"
                onClick={handleRemovePlate}
              />
              <Button
                className="submit"
                title="Salvar alterações"
                onClick={oEv => handleUpdate(oEv)}
              />
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </Container>
  )
}
