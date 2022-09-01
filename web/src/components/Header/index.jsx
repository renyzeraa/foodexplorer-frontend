import { Container } from './style'
import logo from '../../assets/logo.svg'
import { Input } from '../Input'
import { Button } from '../Button'
import { BiSearch, BiReceipt, BiMenuAltRight } from 'react-icons/bi'
import { GoSignOut } from 'react-icons/go'
import { IoMdClose } from 'react-icons/io'
import { MdFavorite } from 'react-icons/md'
import { TiShoppingCart } from 'react-icons/ti'

export function Header({ menu = false, ...rest }) {
  function onClickMenu() {
    document.getElementById('menu').classList.toggle('change')
    document.getElementById('nav').classList.toggle('change')
    document.getElementById('menu-bg').classList.toggle('change-bg')
  }

  return (
    <Container {...rest}>
      <main className="mobile">
        <a href="#">
          <img src={logo} alt="" />
        </a>
        <div className="input">
          <Input
            icon={BiSearch}
            type="text"
            placeholder="Busque seu prato"
          ></Input>
        </div>
        <div id="menu-bar">
          <div id="menu" onClick={onClickMenu}>
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
            <div id="bar3" className="bar"></div>
          </div>
          <ul className="nav" id="nav">
            <li>
              <a href="#">
                Favoritos <MdFavorite />
              </a>
            </li>
            <li>
              <a href="">
                Compras
                <TiShoppingCart />
              </a>
            </li>
            <li>
              <a href="#">
                Pedidos
                <BiReceipt />
              </a>
            </li>
            <li>
              <a href="#">
                Sair
                <GoSignOut />
              </a>
            </li>
          </ul>
        </div>
        <div className="menu-bg" id="menu-bg"></div>
        <div className="menu-bg" id="menu-bg"></div>
      </main>

      <main className="desktop">
        <a href="#">
          <img src={logo} alt="" />
        </a>

        <a href="#">Meus Favoritos</a>
        <div className="input">
          <Input
            icon={BiSearch}
            type="text"
            placeholder="Busque seu prato"
          ></Input>
        </div>
        <a className="cart" href="">
          <span className="count-itens">1</span>
          <TiShoppingCart />
        </a>

        <Button icon={BiReceipt} title="Meu pedido" cont="0"></Button>
        <a className="signout" href="#">
          <GoSignOut />
        </a>
      </main>
    </Container>
  )
}
