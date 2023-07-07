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

export function Payment() {
  function selectCredit() {
    document.getElementById('credit').classList.remove('active')
    document.getElementById('qrcode').classList.add('active')
  }

  function selectPix() {
    document.getElementById('qrcode').classList.remove('active')
    document.getElementById('credit').classList.add('active')
  }

  return (
    <Container>
      <Header />
      <main>
        <div className="container">
          <h1>Meu pedido</h1>
          <div className="demand">
            <ul>
              <li>
                <ItemCart />
              </li>
              <li>
                <ItemCart />
              </li>
              <li>
                <ItemCart />
              </li>
              <li>
                <ItemCart />
              </li>
              <li>
                <ItemCart />
              </li>
            </ul>
          </div>
          <h2>
            Total: R$ <span>103,88</span>
          </h2>
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
