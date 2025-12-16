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
import { getReactToastify, oTiposToastify } from '../../methods/toastify'

/**
 * Componente de Detalhes de Produto.
 *
 * Este componente é usado para exibir os detalhes de um produto específico.
 * Ele exibe informações como nome, descrição, preço, quantidade disponível e
 * fornece opções para adicionar ou remover o produto do carrinho de compras.
 *
 * @component
 */
export function Details({}) {
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
  const [bIsUpdated, setIsUpdated] = useState(false)

  let aIngredientsBd = []
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
        handlePlate(response.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)

        getReactToastify(
          oTiposToastify.TIPO_ERROR,
          'Opsss, algo deu de errado e não foi possível carregar os detalhes do Prato.'
        )
      }
    }
    fetchPlate()

    function handlePlate(oPlate) {
      if (bIsUpdated) {
        return
      }
      setIsUpdated(true)
      const [oPlateCart] = copyShoppingCart.filter(
        oPlateCart => oPlate.id == oPlateCart.id
      )
      setInitialValue(oPlate.value)
      handleValuePlate(0, oPlate.value)
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
      let aNewIngredients = [];
      if (!ingredients.length && aIngredientsBd.length) {
        for (let item of aIngredients) {
          const sName = aIngredientsBd[item - 1].name
          aNewIngredients.push(sName)
        }
      }
      setIngredients(aNewIngredients)
      setDescription(oPlate.description)
      const imgPlate = oPlate.picture
        ? `${api.defaults.baseURL}files/${oPlate.picture}`
        : ''
      setPicture(imgPlate)
    }
  }, [])

  /**
   * Formata um valor numérico como uma string de moeda no formato 'R$ 0,00'.
   *
   * @param {number} iValue - O valor numérico a ser formatado.
   * @returns {string} A string formatada como moeda.
   */
  function formatValuePlate(iValue) {
    let numberString = String(iValue)
    let number = Number(numberString.replace(/[.,]/g, '.'))
    let formattedValue = number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
    return formattedValue
  }

  /**
   * Navega para a página de detalhes do prato com um determinado ID.
   */
  function handleNavigate() {
    setLoading(true)
    navigate(`/plates/${params.id}`)
    setLoading(false)
  }

  /**
   * Calcula o valor total do prato baseado na quantidade selecionada.
   *
   * @param {number} iQnt - A quantidade selecionada do prato.
   * @param {number} iInitialValue - O valor inicial do prato (opcional).
   */
  function handleValuePlate(iQnt, iInitialValue = 0) {
    iQnt = iQnt == 0 ? 1 : iQnt
    let newValue = iInitialValue == 0 ? initialValue : iInitialValue
    let formattedValue = 'R$ 00,00'
    if (newValue) {
      let number = Number(String(newValue).replace(/[.,]/g, '.')) * iQnt
      formattedValue = formatValuePlate(number)
    }
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

  /**
   * Adiciona o prato selecionado ao carrinho de compras.
   */
  function handlePlateToCart() {
    const iAmountPlate = parseInt(countPlate)
    if (!iAmountPlate) {
      return getReactToastify(
        oTiposToastify.TIPO_ALERT,
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
