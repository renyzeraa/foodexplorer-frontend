import { Container } from './style'
import { api } from '../../services/api'

export function PlateFav({ title, onClick, img, plateId, ...rest }) {
  /** Capturar a imagem do banco de dados ou devolver uma string vazia */
  const imgPlate = img ? `${api.defaults.baseURL}files/${img}` : ''

  /** Função de excluir dos favoritos o prato atual */
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
