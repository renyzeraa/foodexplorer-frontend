import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ItemCart } from '../../components/ItemCart'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TiThLargeOutline } from 'react-icons/ti'
import { BsCreditCard2Back } from 'react-icons/bs'
import { BiReceipt } from 'react-icons/bi'
import qrcode from '../../assets/qrcode.svg'
import { shoppingCart } from '../../hooks/shoppingCart'
import { api } from '../../services/api'
import { useState } from 'react'
import { Loading } from '../../components/Loading'
import { useEffect } from 'react'

export function Payment() {
  const [loading, setLoading] = useState(false)
  const [plates, setPlates] = useState([])
  const [platesDb, setPlatesDb] = useState([])
  const [totalValue, setTotalValue] = useState('R$ 0,00')
  const { clearCart, getProducts, removeAllFromId } = shoppingCart()
  const deleteOrder = id => removeAllFromId(id)
  const clearAll = () => clearCart()
  let iTotalPrice = 0

  useEffect(() => {
    handleAllOrders()
  }, [])

  async function handleAllOrders() {
    try {
      setLoading(true)
      const response = await api.get('/plates')
      handlePlates(response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      if (error.response) {
        console.log(error.response.data.message)
        alert(error.response.data.message)
      } else {
        alert('Não foi possível encontrar seus pedidos.')
      }
    }
  }

  function handlePlates(aPlates) {
    setPlatesDb(aPlates)
    handlePlateToShow(aPlates)
  }

  function handlePlateToShow(aPlates = false, aPlatesCart = false) {
    if (!aPlates) {
      aPlates = [...platesDb]
    }
    let copyProductCart = aPlatesCart
    if (!aPlatesCart) {
      copyProductCart = getProducts()
    }

    let aPlatesFiltered = aPlates.filter(oPlateBd => {
      return copyProductCart.some(oPlateCart => {
        return oPlateCart.id == oPlateBd.id
      })
    })
    aPlates = aPlatesFiltered.map(oPlate => {
      let [plateCart] = copyProductCart.filter(oPlateCart => {
        return oPlateCart.id == oPlate.id
      })
      const imgPlate = oPlate.picture
        ? `${api.defaults.baseURL}files/${oPlate.picture}`
        : ''
      let value = plateCart.qtd * oPlate.value
      iTotalPrice += value
      value = getFormattedValue(plateCart.qtd * oPlate.value)
      return {
        id: oPlate.id,
        img: imgPlate,
        qtd: plateCart.qtd,
        title: oPlate.title,
        value
      }
    })
    setTotalValue(getFormattedValue(iTotalPrice))
    iTotalPrice = 0
    setPlates(aPlates)
    aPlates = []
  }

  function getFormattedValue(iValue) {
    return iValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  function selectCredit() {
    document.getElementById('credit').classList.remove('active')
    document.getElementById('qrcode').classList.add('active')
  }
  function selectPix() {
    document.getElementById('qrcode').classList.remove('active')
    document.getElementById('credit').classList.add('active')
  }

  function handleClearAll() {
    const response = window.confirm(
      'Você deseja remover todos os items dos pedidos?'
    )
    if (response) {
      clearAll()
      setPlates([])
    }
  }

  function handleRemoveOrder(id) {
    setLoading(true)
    const newArrayCart = deleteOrder(id)
    handlePlateToShow(false, newArrayCart)
    setLoading(false)
  }

  async function handlePayment() {
    let sDetails = ''
    plates.forEach(item => {
      sDetails += `${item.qtd} x ${item.title}, `
    })
    sDetails = sDetails.slice(0, -2)
    const oPlatesToPost = platesDb.reduce((Accum, oPlate) => {
      const oItem = plates.some(plate => {
        return oPlate.id == plate.id
      })
      if (oItem) {
        Accum[oPlate.id] = oPlate
      }
      return Accum
    })
    const oFormData = new FormData()
    oFormData.append('details', sDetails)
    oFormData.append('plates', oPlatesToPost)
    try {
      setLoading(true)
      clearAll()
      // await api.post('/orders', oFormData)
      // setPlates([])
      setLoading(false)
    } catch (error) {
      setLoading(false)
      if (error.response) {
        console.log(error.response.data.message)
        alert(error.response.data.message)
      } else {
        alert('Não foi possível realizar o pagamento, tente novamente.')
      }
    }
  }

  return (
    <Container>
      <Header />
      {loading && <Loading />}
      <main className="main-content">
        <div className="container">
          <h1>Meu pedido</h1>
          <div className="demand">
            <ul>
              {plates.map(oPlate => (
                <li key={oPlate.id}>
                  <ItemCart
                    imgPlate={oPlate.img}
                    iQuant={oPlate.qtd}
                    sNamePlate={oPlate.title}
                    sValue={oPlate.value}
                    idPlate={oPlate.id}
                    fnRemove={handleRemoveOrder}
                  />
                </li>
              ))}
            </ul>
          </div>
          <h2>Total: {totalValue}</h2>
          <div className="action-buttons">
            <Button title="Excluir Todos" onClick={handleClearAll}></Button>
            <Button title="Realizar Pagamento" onClick={handlePayment}></Button>
          </div>
        </div>
        <div className="container">
          <h1>Pagamento</h1>
          <div className="content-payment">
            <div className="payment">
              <button className="payment-method" onClick={selectPix}>
                <TiThLargeOutline />
                <p>PIX</p>
              </button>
              <button className="payment-method" onClick={selectCredit}>
                <BsCreditCard2Back />
                <p>Crédito</p>
              </button>
            </div>

            <div className="payment-confirm">
              <div className="qrcode " id="qrcode">
                <img src={qrcode} alt="" />
              </div>
              <div className="credit active" id="credit">
                <label htmlFor="">Número do Cartão</label>
                <Input type="text" placeholder="0000 0000 0000 0000"></Input>
                <div className="wrapper">
                  <div className="validate">
                    <label htmlFor="">Validade</label>
                    <Input type="text" placeholder="04/25"></Input>
                  </div>
                  <div className="validate">
                    <label htmlFor="">CVC</label>
                    <Input type="text" placeholder="999"></Input>
                  </div>
                </div>
                <Button icon={BiReceipt} title="Finalizar pagamento" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
