import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Loading } from '../../components/Loading'
import { AiOutlineLeft, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Details({}) {
  const params = useParams()
  const { user } = useAuth()
  const admin = user.isAdmin
  const [loading, setLoading] = useState(false)
  const [picture, setPicture] = useState()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [ingredients, setIngredients] = useState([])
  let aIngredientsBd = []
  let bIsActualized = false
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchPlate() {
      try {
        setLoading(true)
        const oResIng = await api.get('/ingredients')
        aIngredientsBd = oResIng.data
        const response = await api.get(`/plates/${params.id}`)
        handlePlate(response.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert(
            'Opsss, algo deu de errado e não foi possível carregar os detalhes do Prato.'
          )
        }
      }
    }
    fetchPlate()
  }, [])

  function handlePlate(oPlate) {
    if (bIsActualized) {
      return
    }
    setTitle(oPlate.title)
    setValue(oPlate.value)
    const aIngredients = JSON.parse(oPlate.ingredients)
    if (!ingredients.length && aIngredientsBd.length) {
      for (let item of aIngredients) {
        const sName = aIngredientsBd[item].name
        setIngredients(prevState => [...prevState, sName])
      }
    }
    setDescription(oPlate.description)
    const imgPlate = oPlate.picture
      ? `${api.defaults.baseURL}files/${oPlate.picture}`
      : ''
    setPicture(imgPlate)
    bIsActualized = true
  }

  function handleNavigate() {
    setLoading(true)
    navigate(`/plates/${params.id}`)
    setLoading(false)
  }

  return (
    <Container>
      <Header admin={admin}></Header>
      {loading && <Loading />}
      <main>
        <Link to="/">
          <AiOutlineLeft /> voltar
        </Link>
        <section className="content-img">
          {picture && <img src={picture} alt="" />}
        </section>
        <section className="content-about">
          <h1>{title}</h1>
          <p>{description}</p>
          <ul className="makings">
            {ingredients.map(
              (oIng, iDx) => oIng && <li key={String(iDx)}>{oIng}</li>
            )}
          </ul>
          {admin ? (
            <Button title="Editar prato" onClick={handleNavigate}></Button>
          ) : (
            <div className="content-includes">
              <button className="btn">
                <AiOutlineMinus />
              </button>
              <span className="count-item">00</span>
              <button className="btn">
                <AiOutlinePlus />
              </button>
              <Button title="Incluir"></Button>
            </div>
          )}
        </section>
      </main>
      <Footer></Footer>
    </Container>
  )
}
