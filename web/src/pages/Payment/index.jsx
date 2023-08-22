import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ItemCart } from '../../components/ItemCart'
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
import { getReactToastify, oTiposToastify } from '../../methods/toastify'
import { useNavigate } from 'react-router-dom'

/**
 * Componente Payment para a página de pagamento.
 *
 * Este componente representa a página de pagamento onde o usuário pode revisar e concluir seu pedido.
 *
 * @returns {JSX.Element} Um componente de página de pagamento.
 */
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

  const navigate = useNavigate()
  /**
   * Este é um efeito colateral que é executado quando o componente é montado. 
   * Ele chama a função handleAllPlates para buscar todos os pratos disponíveis. 
   * O segundo argumento, [], indica que este efeito deve ser executado apenas uma vez, após o componente ser montado.
   */
  useEffect(() => {
    handleAllPlates()
  }, [])

  /**
   * Função para buscar e lidar com todos os pratos disponíveis.
   *
   * Esta função é usada para buscar todos os pratos disponíveis na API e
   * manipular os dados dos pratos para exibição ou processamento adicional.
   */
  async function handleAllPlates() {
    try {
      setLoading(true)
      const response = await api.get('/plates')
      handlePlates(response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      getReactToastify(
        oTiposToastify.TIPO_ERROR,
        'Não foi possível encontrar seus pedidos.'
      )
    }
  }

  /**
   * Função para manipular os pratos.
   *
   * Esta função recebe um array de pratos e atualiza o estado `platesDb` com esses pratos.
   * Em seguida, chama a função `handlePlateToShow` para atualizar os pratos exibidos.
   *
   * @param {Array} aPlates - Um array de objetos de prato.
   */
  function handlePlates(aPlates) {
    setPlatesDb(aPlates)
    handlePlateToShow(aPlates)
  }

  /**
   * Função para atualizar os pratos a serem exibidos.
   *
   * Esta função recebe dois arrays opcionais, `aPlates` e `aPlatesCart`. Se `aPlates` não for fornecido,
   * ele usará o estado `platesDb` como fonte de pratos. Se `aPlatesCart` não for fornecido,
   * ele usará a função `getProducts` para obter os pratos do carrinho.
   *
   * Em seguida, ele filtra os pratos a serem exibidos com base na interseção entre `aPlates` e `aPlatesCart`.
   * Ele calcula o preço total e formata os valores dos pratos exibidos e, em seguida, atualiza os estados `totalValue` e `plates`.
   *
   * @param {Array} aPlates - Um array de objetos de prato (opcional).
   * @param {Array} aPlatesCart - Um array de objetos de prato do carrinho (opcional).
   */
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
      let plateValue = Number(String(oPlate.value).replace(/[.,]/g, '.'))
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

  /**
   * Função para formatar um valor em moeda.
   *
   * Esta função recebe um valor numérico e o formata em moeda brasileira.
   *
   * @param {number} iValue - O valor numérico a ser formatado.
   * @returns {string} Uma string formatada no estilo de moeda brasileira.
   */
  function getFormattedValue(iValue) {
    return iValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  /**
   * Função para selecionar a forma de pagamento com cartão de crédito.
   *
   * Esta função remove a classe 'active' do elemento com id 'credit' e adiciona
   * a classe 'active' ao elemento com id 'qrcode'.
   */
  function selectCredit() {
    document.getElementById('credit').classList.remove('active')
    document.getElementById('qrcode').classList.add('active')
  }

  /**
   * Função para selecionar a forma de pagamento com Pix.
   *
   * Esta função remove a classe 'active' do elemento com id 'qrcode' e adiciona
   * a classe 'active' ao elemento com id 'credit'.
   */
  function selectPix() {
    document.getElementById('qrcode').classList.remove('active')
    document.getElementById('credit').classList.add('active')
  }

  /**
   * Função para limpar todos os itens dos pedidos.
   *
   * Esta função exibe um prompt de confirmação para o usuário e, se a resposta for positiva,
   * limpa todos os itens dos pedidos (clearAll) e redefine o estado 'plates' como um array vazio.
   */
  function handleClearAll() {
    const response = window.confirm(
      'Você deseja remover todos os items dos pedidos?'
    )
    if (response) {
      clearAll()
      setPlates([])
    }
  }
  
  /**
   * Função para remover um pedido pelo seu ID.
   *
   * Esta função remove um pedido pelo seu ID e atualiza o array de pedidos no carrinho.
   *
   * @param {number} id - O ID do pedido a ser removido.
   */
  function handleRemoveOrder(id) {
    setLoading(true)
    const newArrayCart = deleteOrder(id)
    handlePlateToShow(false, newArrayCart)
    setLoading(false)
  }

  /**
   * Função para verificar se os valores necessários na tela foram preenchidos.
   *
   * Esta função verifica se os valores necessários na tela foram preenchidos
   * com base na forma de pagamento selecionada (cartão de crédito ou Pix).
   *
   * @returns {boolean} true se os valores necessários foram preenchidos, false caso contrário.
   */
  function verificaValoresTela() {
    if (!document.getElementById('credit').classList.contains('active')) {
      if (!codeCard || !cardNumber || !cardValidate) {
        return false
      }
    }
    return true
  }

  /**
   * Função para obter os dados do pedido em um objeto FormData.
   *
   * Esta função é usada para criar um objeto de dados do pedido em formato FormData
   * com base nos pratos selecionados e no valor total do pedido.
   *
   * @returns {FormData|false} Um objeto FormData com os dados do pedido ou false se não houver pratos no pedido.
   */
  function getFormDataOrder() {
    //pratos do pedido
    let aPlatesOrder = []
    platesDb.forEach(oPlate => {
      if (plates.some(plate => {
        return oPlate.id == plate.id
      })) {
        aPlatesOrder.push(oPlate.id)
      }
    })
    if(!aPlatesOrder.length) {
      return false;
    }
    let sDetails = ''
    plates.forEach(item => {
      sDetails += `${item.qtd} x ${item.title}, `
    })
    sDetails = sDetails.slice(0, -2)
    let iTotalValue = 0
    if (totalValue) {
      iTotalValue = Number(totalValue.slice(3).replace(',', '.'))
    }
    return {
      plates: aPlatesOrder,
      details: sDetails,
      total_value: iTotalValue
    }
  }

  /**
   * Função para lidar com o processo de pagamento e criação de um novo pedido.
   *
   * Esta função é chamada quando o usuário deseja concluir o pagamento e criar um novo pedido.
   * Ela executa a validação dos valores na tela, cria um objeto de dados do pedido e faz uma solicitação
   * POST ao servidor para criar o pedido.
   *
   * @returns {void}
   */
  async function handlePayment() {
    if (!verificaValoresTela()) {
      return getReactToastify(
        oTiposToastify.TIPO_ALERT,
        'Favor preencher todos os valores corretamente'
      )
    }
    
    try {
      const oFormData = getFormDataOrder()
      if (!oFormData) {
        return getReactToastify(
          oTiposToastify.TIPO_ALERT,
          'Não é possível criar pedido sem pratos.'
        )
      }
      setLoading(true)
      await api.post('/orders', oFormData)
      clearAll()
      setPlates([])
      setLoading(false)
      getReactToastify(
        oTiposToastify.TIPO_SUCCESS,
        'Pedido realizado com sucesso!.'
      )
      navigate('/demand')
    } catch (error) {
      setLoading(false)
      getReactToastify(
        oTiposToastify.TIPO_ERROR,
        'Não foi possível realizar o pedido, tente novamente.'
      )
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
                  placeHolder="0000 0000 0000 0000"
                  fnOnChange={setCardNumber}
                ></InputMask>
                <div className="wrapper">
                  <div className="validate">
                    <label htmlFor="">Validade</label>
                    <InputMask
                      sMask="99/99"
                      placeHolder="01/23"
                      fnOnChange={setCardValidate}
                    ></InputMask>
                  </div>
                  <div className="validate">
                    <label htmlFor="">CVC</label>
                    <InputMask
                      sMask="999"
                      placeHolder="999"
                      fnOnChange={setCodeCard}
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
