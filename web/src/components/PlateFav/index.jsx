import { api } from '../../services/api'
import { Container } from './style'

export function PlateFav({ title, fnLoading, img, plateId, ...rest }) {
  async function removeFavPlate() {
    try {
      fnLoading && fnLoading(true)
      await api.delete(`/favorites/favorite_plates/${plateId}`)
      fnLoading && fnLoading(false)
      alert('Prato removido dos favoritos com sucesso!')
    } catch (error) {
      fnLoading && fnLoading(false)
      alert(error.message)
    }
  }

  const imgPlate = img ? `${api.defaults.baseURL}files/${img}` : ''

  return (
    <Container {...rest}>
      <img
        src={imgPlate}
        alt="imagem do prato favoritado"
        title="Clique para saber mais sobre o Prato."
      />
      <div className="description-content">
        <span className="title-plate" title={title}>
          {title}
        </span>
        <span className="remove-fav" onClick={removeFavPlate}>
          Remover dos Favoritos
        </span>
      </div>
    </Container>
  )
}