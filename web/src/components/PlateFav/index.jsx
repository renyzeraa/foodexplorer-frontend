import { Container } from './style'
import { api } from '../../services/api'

/**
 * Componente PlateFav para exibição de prato favorito.
 *
 * Este componente é usado para exibir um prato favorito com seu título e imagem.
 *
 * @param {string} title - O título do prato.
 * @param {function} onClick - Uma função de retorno de chamada para lidar com cliques no prato favorito.
 * @param {string} img - O caminho da imagem do prato.
 * @param {string} plateId - O identificador único do prato.
 * @param {object} rest - Outras propriedades passadas para o componente.
 * @returns {JSX.Element} Um componente que exibe um prato favorito.
 */
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
