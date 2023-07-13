import { Link } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from './style'
import { AiOutlineLeft } from 'react-icons/ai'
import { PlateFav } from '../../components/PlateFav'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import { Loading } from '../../components/Loading'
import { MdDoNotDisturbAlt } from 'react-icons/md'
import { getReactToastify, oTiposToastify } from '../../methods/toastify'

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
        getReactToastify(
          oTiposToastify.TIPO_ERROR,
          'Não foi possível buscar seus Pratos favoritos.'
        )
      }
    }
    searchPlatesFav()
  }, [])

  async function removeFavPlate(plateId) {
    try {
      setLoading(true)
      await api.delete(`/favorites/favorite_plates/${plateId}`)
      const response = await api.get('/favorites/favorite_plates/')
      setPlatesFav(response.data)
      setLoading(false)
      getReactToastify(
        oTiposToastify.TIPO_SUCCESS,
        'Prato removido dos favoritos com sucesso!'
      )
    } catch (error) {
      setLoading(false)
      getReactToastify(
        oTiposToastify.TIPO_ERROR,
        'Não foi possível remover o Prato atual dos favoritos.'
      )
    }
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
          {platesFav.length == 0 ? (
            <div className="alert-no-plates">
              <h1>Nenhum Prato Localizado</h1>
              <MdDoNotDisturbAlt size={90} className="icon-not" />
            </div>
          ) : (
            platesFav.map(oPlate => (
              <PlateFav
                key={oPlate.id}
                title={oPlate.title}
                img={oPlate.picture}
                plateId={oPlate.id}
                onClick={removeFavPlate}
              ></PlateFav>
            ))
          )}
        </main>
      </section>
      <Footer></Footer>
    </Container>
  )
}
