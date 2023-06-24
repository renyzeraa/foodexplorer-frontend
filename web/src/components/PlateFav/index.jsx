import { Container } from './style'

export function PlateFav({ title, fnRemove, img, plateId, ...rest }) {
  return (
    <Container {...rest}>
      <img
        src={img}
        alt="imagem do prato favoritado"
        title="Clique para saber mais sobre o Prato."
      />
      <div className="description-content">
        <span className="title-plate" title={title}>
          {title}
        </span>
        <span className="remove-fav" onClick={() => fnRemove()}>
          Remover dos Favoritos
        </span>
      </div>
    </Container>
  )
}
