import { Container } from './style'
import logo from '../../assets/logo.svg'
import { Button } from '../Button'
import { BiSearch } from 'react-icons/bi'
import { GoSignOut } from 'react-icons/go'
import { TbReceipt } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { InputSearch } from '../InputSearch'

export function Header({ fnChange, ...rest }) {
  const { signOut, user } = useAuth()
  const admin = user.isAdmin

  /**
   * Método para modificar atributos para abrir o menu hamburger mobile
   */
  function onClickMenu() {
    document.getElementById('menu') &&
      document.getElementById('menu').classList.toggle('change')
    document.getElementById('nav') &&
      document.getElementById('nav').classList.toggle('change')
    document.getElementById('menu-bg') &&
      document.getElementById('menu-bg').classList.toggle('change-bg')
    document.querySelector('.logo-header') &&
      document.querySelector('.logo-header').classList.toggle('change')
    document.querySelector('.icon-receipt') &&
      document.querySelector('.icon-receipt').classList.toggle('change')
    document.getElementById('menu-bar') &&
      document.getElementById('menu-bar').classList.toggle('change')
  }

  function handleFnSearch(oEv) {
    if (typeof fnChange === 'function') {
      fnChange(oEv)
    }
  }
  return (
    <Container {...rest}>
      <main className="mobile">
        <Link className="logo-header" to="/">
          <img src={logo} alt="" />
          {admin ? <span className="admin-logo">admin</span> : []}
        </Link>

        <div id="menu-bar">
          <div id="menu" onClick={onClickMenu}>
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
            <div id="bar3" className="bar"></div>
          </div>

          {admin ? (
            <ul className="nav" id="nav">
              <div className="input">
                <InputSearch
                  icon={BiSearch}
                  type="text"
                  placeholder="Busque por pratos ou ingredientes"
                  fnChange={handleFnSearch}
                ></InputSearch>
              </div>
              <li>
                <Link to="/plates">Novo Prato</Link>
              </li>
              <li>
                <Link to="/demand">Pedidos</Link>
              </li>
              <li>
                <Link onClick={signOut}>Sair</Link>
              </li>
            </ul>
          ) : (
            <ul className="nav" id="nav">
              <div className="input">
                <InputSearch
                  icon={BiSearch}
                  type="text"
                  placeholder="Busque por pratos ou ingredientes"
                  fnChange={handleFnSearch}
                ></InputSearch>
              </div>
              <li>
                <Link to="/favorites">Meus Favoritos</Link>
              </li>
              <li>
                <Link to="/demand">Histórico de Pedidos</Link>
              </li>
              <li>
                <Link to="/payment">Pagamento</Link>
              </li>
              <li>
                <Link onClick={signOut}>Sair</Link>
              </li>
            </ul>
          )}
        </div>
        <div className="menu-bg" id="menu-bg"></div>
        <div className="menu-bg" id="menu-bg"></div>
        {admin ? (
          []
        ) : (
          <Link className="icon-receipt" to="/demand">
            <span className="count-itens">9</span>
            <TbReceipt />
          </Link>
        )}
      </main>

      <main className="desktop">
        <Link className={admin ? 'logo-content admin' : 'logo-content'} to="/">
          <img src={logo} alt="food explorer logo" />
        </Link>
        <div className={admin ? 'input admin' : ' input'}>
          <InputSearch
            icon={BiSearch}
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            fnChange={handleFnSearch}
          ></InputSearch>
        </div>
        {admin ? (
          <>
            <Link className="admin-links" to="/demand">
              Pedidos
            </Link>
            <Link to="/plates">
              <Button className="admin-links" title="Novo Prato"></Button>
            </Link>

            <Link className="admin-links" onClick={signOut}>
              <GoSignOut />
            </Link>
          </>
        ) : (
          <>
            <Link to="/favorites">Meus Favoritos</Link>
            <Link to="/demand">Histórico de pedidos</Link>
            <Link to="/payment">
              <Button icon={TbReceipt} title="Pedidos" count={3}></Button>
            </Link>

            <Link className="signout" onClick={signOut}>
              <GoSignOut />
            </Link>
          </>
        )}
      </main>
    </Container>
  )
}
