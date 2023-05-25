import { Container } from './style'
import logo from '../../assets/logo.svg'
import { Input } from '../Input'
import { Button } from '../Button'
import { BiSearch } from 'react-icons/bi'
import { GoSignOut } from 'react-icons/go'
import { TbReceipt } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function Header({ ...rest }) {
    const { signOut, user } = useAuth()
    const admin = user.isAdmin
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
                                <Input
                                    icon={BiSearch}
                                    type="text"
                                    placeholder="Busque por pratos ou ingredientes"
                                ></Input>
                            </div>
                            <li>
                                <Link href="/create">Novo Prato</Link>
                            </li>

                            <li>
                                <Link href="/demand">Pedidos</Link>
                            </li>
                            <li>
                                <Link onClick={signOut}>Sair</Link>
                            </li>
                        </ul>
                    ) : (
                        <ul className="nav" id="nav">
                            <div className="input">
                                <Input
                                    icon={BiSearch}
                                    type="text"
                                    placeholder="Busque por pratos ou ingredientes"
                                ></Input>
                            </div>
                            <li>
                                <a href="/favorites">Favoritos</a>
                            </li>
                            <li>
                                <a href="/payment">Compras</a>
                            </li>
                            <li>
                                <a href="/demand">Pedidos</a>
                            </li>
                            <li>
                                <a href="#">Sair</a>
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
                {admin ? (
                    <Link className="logo-content admin" to="/">
                        <img src={logo} alt="" />
                    </Link>
                ) : (
                    <Link className="logo-content " to="/">
                        <img src={logo} alt="" />
                    </Link>
                )}

                {admin ? (
                    <div className="input admin">
                        <Input
                            icon={BiSearch}
                            type="text"
                            placeholder="Busque por pratos ou ingredientes"
                        ></Input>
                    </div>
                ) : (
                    <div className="input">
                        <Input
                            icon={BiSearch}
                            type="text"
                            placeholder="Busque por pratos ou ingredientes"
                        ></Input>
                    </div>
                )}

                {admin ? (
                    <>
                        <Link className="admin-links" to="/demand">
                            Pedidos
                        </Link>
                        <Link to="/create">
                            <Button
                                className="admin-links"
                                title="Novo Prato"
                            ></Button>
                        </Link>

                        <Link className="admin-links" onClick={signOut}>
                            <GoSignOut />
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/favorites">Meus Favoritos</Link>
                        <Link to="/demand">Histórico de pedidos</Link>
                        <Link to="/demand">
                            <Button
                                icon={TbReceipt}
                                title="Pedidos"
                                cont={3}
                            ></Button>
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
