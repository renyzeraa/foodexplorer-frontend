import { api } from '../../services/api'
import { Container } from './style'

export function PlateFav({ title, onClick, img, plateId, ...rest }) {
  const imgPlate = img ? `${api.defaults.baseURL}files/${img}` : ''

  function handleOnClickRem() {
    onClick && onClick(plateId)
  }

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
        <span className="remove-fav" onClick={handleOnClickRem}>
          Remover dos Favoritos
        </span>
      </div>
    </Container>
  )
}
