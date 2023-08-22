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

/**
 * Componente Favorites para exibir os pratos favoritos do usuário.
 *
 * Este componente é responsável por renderizar a lista de pratos favoritos do usuário.
 * Ele faz uma solicitação à API para obter os pratos favoritos do usuário e exibe
 * esses pratos na interface do usuário.
 *
 * @returns {JSX.Element} Um componente que exibe os pratos favoritos do usuário.
 */
export function Favorites() {
  const [loading, setLoading] = useState(false)
  const [platesFav, setPlatesFav] = useState([])

  /**
   * UseEffect para buscar e definir os pratos favoritos do usuário.
   *
   * Este hook useEffect é usado para buscar os pratos favoritos do usuário quando o componente é montado.
   * Ele faz uma chamada à API para obter a lista de pratos favoritos do usuário e a define no estado 'platesFav'.
   * Também lida com erros e exibe uma notificação de erro em caso de falha na busca.
   *
   * @returns {void}
   */
  useEffect(() => {
    async function searchPlatesFav() {
      try {
        setLoading(true)
        const response = await api.get('/favorites')
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

  /**
   * Função para remover um prato dos favoritos do usuário.
   *
   * Esta função é usada para remover um prato específico da lista de pratos favoritos do usuário.
   * Ela faz uma chamada à API para excluir o prato dos favoritos, atualiza a lista de pratos favoritos
   * e exibe uma notificação de sucesso ou erro, dependendo do resultado da operação.
   *
   * @param {number} plateId - O ID do prato que deve ser removido dos favoritos.
   * @returns {void}
   */
  async function removeFavPlate(plateId) {
    try {
      setLoading(true)
      await api.delete(`/favorites/${plateId}`)
      const response = await api.get('/favorites')
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
