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
import { shoppingCart } from '../../hooks/shoppingCart'

export function Details({ }) {
  const params = useParams()
  const { user } = useAuth()
  const admin = user.isAdmin
  const [loading, setLoading] = useState(false)
  const [picture, setPicture] = useState()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [countPlate, setCountPlate] = useState('00')
  const [valuePlate, setValuePlate] = useState('R$ 00,00')
  const [iCardId, setCardId] = useState(0)
  const [initialValue, setInitialValue] = useState(0)

  let aIngredientsBd = []
  let bIsActualized = false
  const navigate = useNavigate()
  const {
    removeProductToCart,
    addProductToCart,
    plusProductCart,
    getProducts
  } = shoppingCart()
  const copyShoppingCart = getProducts()
  const addPlateToCart = (id, iQnt) => addProductToCart(id, iQnt)
  const remPlateToCart = id => removeProductToCart(id)
  const plusThePlate = (id, iQnt) => plusProductCart(id, iQnt)

  useEffect(() => {
    async function fetchPlate() {
      try {
        setLoading(true)
        const oResIng = await api.get('/ingredients')
        aIngredientsBd = oResIng.data
        const response = await api.get(`/plates/${params.id}`)


        const plateData = response.data
        console.log("DADOS DO BACK CHEGANDO um =>", plateData)
        handlePlate(plateData)
        console.log("DADOS DO BACK CHEGANDO dois =>", plateData)
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
    const [oPlateCart] = copyShoppingCart.filter(
      oPlateCart => oPlate.id == oPlateCart.id
    )
    setInitialValue(oPlate.value)
    handleValuePlate(0)
    if (oPlateCart && oPlateCart.id) {
      let amount
      if (oPlateCart.qtd > 0) {
        amount = oPlateCart.qtd
        if (amount <= 9) {
          amount = String('0' + amount)
        } else if (amount > 98) {
          amount = '99'
        }
      }
      setCountPlate(String(amount))
      handleValuePlate(oPlateCart.qtd, oPlate.value)
    }
    setCardId(oPlate.id)
    setTitle(oPlate.title)
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

  function formatValuePlate(iValue) {
    let numberString = String(iValue)
    let number = Number(numberString.replace(/[.,]/g, '.'))
    let formattedValue = number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
    return formattedValue
  }

  function handleNavigate() {
    setLoading(true)
    navigate(`/plates/${params.id}`)
    setLoading(false)
  }

  function handleValuePlate(iQnt, iInitialValue = 0) {
    iQnt = iQnt == 0 ? 1 : iQnt
    const newValue = iInitialValue == 0 ? initialValue : iInitialValue
    let number = Number(newValue.replace(/[.,]/g, '.')) * iQnt
    let formattedValue = formatValuePlate(number)
    setValuePlate(formattedValue)
  }

  /**
   * Diminui a quantidade de prato
   */
  function handleMinusPlate() {
    let xValue = parseInt(countPlate)
    xValue--
    if (xValue < 1) {
      xValue = '00'
    } else if (xValue <= 9) {
      xValue = '0' + xValue
    }
    const response = remPlateToCart(iCardId)
    if (response) {
      setCountPlate(String(xValue))
    } else {
      xValue = '01'
      setCountPlate(xValue)
    }
    handleValuePlate(parseInt(xValue))
  }

  /**
   * Aumenta a quantidade de prato
   */
  function handlePlusPlate() {
    let xValue = parseInt(countPlate)
    xValue++
    if (xValue >= 2) {
      plusThePlate(iCardId)
    }
    if (xValue <= 9) {
      xValue = String('0' + xValue)
    } else if (xValue > 98) {
      xValue = '99'
    } else {
      String(xValue)
    }
    handleValuePlate(parseInt(xValue))
    setCountPlate(xValue)
  }

  function handlePlateToCart() {
    const iAmountPlate = parseInt(countPlate)
    if (!iAmountPlate) {
      return alert(
        'Indique a quantidade de pratos que você deseja incluir ao carrinho.'
      )
    }
    addPlateToCart(iCardId, iAmountPlate)
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
              <button className="btn" onClick={handleMinusPlate}>
                <AiOutlineMinus />
              </button>
              <span className="count-item">{countPlate}</span>
              <button className="btn" onClick={handlePlusPlate}>
                <AiOutlinePlus />
              </button>
              <Button
                title={`Incluir ● ${valuePlate}`}
                onClick={handlePlateToCart}
                style={{ padding: '12px' }}
              ></Button>
            </div>
          )}
        </section>
      </main>
      <Footer></Footer>
    </Container>
  )
}
