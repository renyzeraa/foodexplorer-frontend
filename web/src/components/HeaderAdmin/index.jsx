import { Container } from './style'
import logo from '../../assets/logo.svg'
import { Input } from '../Input'
import { Button } from '../Button'
import { BiSearch, BiReceipt, BiMenuAltRight } from 'react-icons/bi'
import { GoSignOut } from 'react-icons/go'
import { MdAddShoppingCart } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'

export function HeaderAdmin({ show, admin, ...rest }) {
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
        {show && (
          <div className="input">
            <Input
              icon={BiSearch}
              type="text"
              placeholder="Busque seu prato"
            ></Input>
          </div>
        )}
        <div id="menu-bar">
          <div id="menu" onClick={onClickMenu}>
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
            <div id="bar3" className="bar"></div>
          </div>
          <ul className="nav" id="nav">
            <li>
              <a href="">
                Home
                <AiOutlineHome />
              </a>
            </li>
            <li>
              <a href="">
                Criar Prato
                <MdAddShoppingCart />
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

        <a href="#"></a>
        {show && (
          <div className="input">
            <Input
              icon={BiSearch}
              type="text"
              placeholder="Busque seu prato"
            ></Input>
          </div>
        )}
        <div className="content">
          <a className="create" href="">
            Criar Prato
            <MdAddShoppingCart />
          </a>
          <Button icon={BiReceipt} title="Pedidos em aberto"></Button>
          <a className="signout" href="#">
            <GoSignOut />
          </a>
        </div>
      </main>
    </Container>
  )
}
