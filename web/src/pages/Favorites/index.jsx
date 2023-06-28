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
        setPlatesFav(response.data)
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
          {platesFav.map(oPlate => (
            <PlateFav
              key={oPlate.id}
              title={oPlate.title}
              img={oPlate.picture}
              plateId={oPlate.id}
              fnLoading={loadingCard}
            ></PlateFav>
          ))}
        </main>
      </section>
      <Footer></Footer>
    </Container>
  )
}
