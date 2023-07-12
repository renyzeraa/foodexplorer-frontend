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
import { InputMask } from '../../components/InputMask'

export function Payment() {
  const [loading, setLoading] = useState(false)
  const [plates, setPlates] = useState([])
  const [platesDb, setPlatesDb] = useState([])
  const [totalValue, setTotalValue] = useState('R$ 0,00')

  const [cardNumber, setCardNumber] = useState('')
  const [cardValidate, setCardValidate] = useState('')
  const [codeCard, setCodeCard] = useState('')

  const { clearCart, getProducts, removeAllFromId } = shoppingCart()
  const deleteOrder = id => removeAllFromId(id)
  const clearAll = () => clearCart()
  let iTotalPrice = 0

  useEffect(() => {
    handleAllPlates()
  }, [])

  async function handleAllPlates() {
    try {
      setLoading(true)
      const response = await api.get('/plates')
      handlePlates(response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      if (error.response) {
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
      let plateValue = Number(oPlate.value.replace(/[.,]/g, '.'))
      let value = plateCart.qtd * plateValue
      iTotalPrice += value
      value = getFormattedValue(plateCart.qtd * plateValue)
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

  function verificaValoresTela() {
    if (!document.getElementById('credit').classList.contains('active')) {
      if (!codeCard || !cardNumber || !cardValidate) {
        return false
      }
    }
    return true
  }

  async function handlePayment() {
    if (!verificaValoresTela()) {
      return alert('Favor preencher todos os valores corretamente')
    }
    const oFormData = getFormDataOrder()
    try {
      setLoading(true)
      await api.post('/orders', oFormData)
      // clearAll()
      // setPlates([])
      setLoading(false)
    } catch (error) {
      setLoading(false)
      if (error.response) {
        alert(error.response.data.error)
      } else {
        alert('Não foi possível realizar o pedido, tente novamente.')
      }
    }
  }

  function getFormDataOrder() {
    const oFormData = new FormData()
    // string de detalhes do pedido
    let sDetails = ''
    plates.forEach(item => {
      sDetails += `${item.qtd} x ${item.title}, `
    })
    sDetails = sDetails.slice(0, -2)
    oFormData.append('details', sDetails)

    //pratos do pedido
    const aPlates = platesDb.filter(oPlate => {
      return plates.some(plate => {
        return oPlate.id == plate.id
      })
    })
    const oPlatesToPost = aPlates.reduce((Accum, oPlate) => {
      Accum[oPlate.id] = oPlate
      return Accum
    }, {})
    oFormData.append('plates', oPlatesToPost)

    oFormData.append('status', 'teste status')
    oFormData.append('Content-Type', 'multipart/form-data')
    return oFormData
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
            <Button
              title="Realizar Pagamento"
              icon={BiReceipt}
              onClick={handlePayment}
            ></Button>
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
                <InputMask
                  sMask="9999 9999 9999 9999"
                  placeholder="0000 0000 0000 0000"
                  onChange={oEv => setCardNumber(oEv.target.value)}
                ></InputMask>
                <div className="wrapper">
                  <div className="validate">
                    <label htmlFor="">Validade</label>
                    <InputMask
                      sMask="99/99"
                      placeholder="01/23"
                      onChange={oEv => setCardValidate(oEv.target.value)}
                    ></InputMask>
                  </div>
                  <div className="validate">
                    <label htmlFor="">CVC</label>
                    <InputMask
                      sMask="999"
                      placeholder="999"
                      onChange={oEv => setCodeCard(oEv.target.value)}
                    ></InputMask>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
