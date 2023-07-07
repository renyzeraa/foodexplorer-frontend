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
  const [totalValue, setTotalValue] = useState('R$ 0,00')
  const { clearCart, removeProductToCart, productsCart } = shoppingCart()
  const clearAll = () => clearCart()
  let copyProductCart = [...productsCart]
  let iTotalPrice = 0
  useEffect(() => {
    async function handleOrder() {
      try {
        setLoading(true)
        const response = await api.get('/plates')
        handlePlateToShow(response.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        if (error.response) {
          console.log(error.response.data.message)
          alert(error.response.data.message)
        } else {
          alert('Não foi possível favoritar o Prato.')
        }
      }
    }
    handleOrder()
  }, [])

  function handlePlateToShow(aPlates) {
    let plates = aPlates.filter(oPlateBd => {
      return copyProductCart.some(oPlateCart => {
        return oPlateCart.id == oPlateBd.id
      })
    })
    plates = plates.map(oPlate => {
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
    setPlates(plates)
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

  function handlePayment() {}

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
