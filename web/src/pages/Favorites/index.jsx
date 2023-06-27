import { Link } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from './style'
import { AiOutlineLeft } from 'react-icons/ai'
import { PlateFav } from '../../components/PlateFav'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import { Loading } from '../../components/Loading'

export function Favorites() {
  const [loading, setLoading] = useState(false)
  const [platesFav, setPlatesFav] = useState([])

  useEffect(() => {
    async function searchPlatesFav() {
      try {
        setLoading(true)
        const response = await api.get('/favorites/favorite_plates/')
        console.log(response)
        // setPlatesFav(response.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error(error)
      }
    }
    searchPlatesFav()
  }, [])

  function loadingCard(bLoad) {
    setLoading(bLoad)
  }

  return (
    <Container>
      {loading && <Loading></Loading>}
      <Header></Header>
      <section className="content">
        <header className="content-header">
          <h1 className="title-page">Meus favoritos</h1>
          <Link to="/">
            <AiOutlineLeft /> voltar
          </Link>
        </header>
        <main className="content-favorites">
          <PlateFav title="Feijão Com Arroz" plateId="1"></PlateFav>
          <PlateFav
            title="Pipoca Salgada"
            plateId="3"
            fnLoading={loadingCard}
          ></PlateFav>
          <PlateFav
            title="Canjica"
            plateId="3"
            fnLoading={loadingCard}
          ></PlateFav>
          <PlateFav
            title="Peixe Tofu"
            plateId="4"
            fnLoading={loadingCard}
          ></PlateFav>
          <PlateFav
            title="Salada Ravello"
            plateId="5"
            fnLoading={loadingCard}
          ></PlateFav>
          <PlateFav
            title="Pipoca Doce"
            plateId="6"
            fnLoading={loadingCard}
          ></PlateFav>
        </main>
      </section>
      <Footer></Footer>
    </Container>
  )
}
