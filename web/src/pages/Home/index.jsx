import { Container } from './style'
import { Header } from '../../components/Header'
import fruits from '../../assets/fruits-header.svg'

export function Home() {
  return (
    <Container>
      <Header></Header>
      <main>
        <header>
          <div className="img-content">
            <img src={fruits} alt="" />
          </div>
          <div className="text-content">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </header>
      </main>
    </Container>
  )
}
