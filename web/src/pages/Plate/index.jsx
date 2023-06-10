import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Ingredient } from '../../components/Ingredient'
import { TextArea } from '../../components/TextArea'
import { Link } from 'react-router-dom'
import { AiOutlineLeft, AiOutlineUpload } from 'react-icons/ai'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

import { api } from '../../services/api'

export function Plate({ isNew = true }) {
  const { user } = useAuth()
  const admin = user.isAdmin
  const plate = {}

  const [picture, setPicture] = useState(null)

  const [title, setTitle] = useState(plate.title)
  const [description, setDescription] = useState(plate.description)
  const [value, setValue] = useState(plate.value)
  const [categories, setCategories] = useState(plate.categories)

  const [ingredients, setIngredients] = useState([])
  const [newIngredients, setNewIngredients] = useState('')


  async function handleUpdate() {
    const plate = {
      title,
      description,
      value,
      ingredients,
      categories,
      picture
    }
    await updatePlate({ plate })
  }

  async function handleNewPlate(e) {
    e.preventDefault();

    if (!title) {
      return alert('É necessário inserir um nome ao Prato!');
    }

    if (newIngredients) {
      return alert('Possui um ingrediente não inserido!');
    }
    if (!ingredients.length) {
      return alert('É necessário inserir pelo menos um ingrediente ao Prato!');
    }
    if (!value) {
      return alert('É valor do Prato é obrigatório!');
    }
    if (!description) {
      return alert('É obrigatório ter uma descrição do Prato!');
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('value', value);
    formData.append('ingredients', ingredients.join(','));
    formData.append('categories', categories.toString());
    formData.append('picture', imgFile);
    formData.append('Content-Type', 'multipart/form-data');

    try {
      await api.post('/plates', formData);
      console.log('Prato enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar o Prato:', error);
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

  return (
    <Container>
      <Header admin={admin} />
      <section>
        <div className="header">
          <Link to="/">
            <AiOutlineLeft /> voltar
          </Link>
          <h1>{isNew ? <p>Novo prato</p> : <p>Editar prato</p>}</h1>
        </div>
        <form className="content-wrapper" action="">
          <div className="content">
            <div className="content-img">
              <label htmlFor="">Imagem do prato</label>
              <label htmlFor="product">
                <AiOutlineUpload />
                {isNew ? (
                  <p>Selecione imagem</p>
                ) : (
                  <p>Selecione imagem para alterá-la</p>
                )}
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
                onChange={oEv => setCategories(oEv.target.value)}
              >
                <option value="Refeicao">Refeição</option>
                <option value="Sobremesa" >Sobremesa</option>
                <option value="Doces">Doces</option>
                <option value="Bebidas">Bebidas</option>

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
                />
              </div>
            </div>
            <div className="price">
              <label htmlFor="">Preço</label>
              <Input
                className="price"
                type="text"
                placeholder="R$ 00.00"
                onChange={oEv => setValue(oEv.target.value)}
              />
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
            {!isNew ? (
              <div className="edit-plate">
                <Input className="delete" type="submit" value="Excluir prato" />

                <Input
                  className="submit"
                  type="submit"
                  value="Salvar alterações"
                />
              </div>
            ) : (
              <Input
                className="submit"
                type="submit"
                value="Criar Prato"
                onClick={handleNewPlate}
              />
            )}
          </div>
        </form>
      </section>
      <Footer />
    </Container>
  )
}
