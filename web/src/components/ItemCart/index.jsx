import { Container } from './style'

export function ItemCart({
  imgPlate,
  iQuant,
  sNamePlate,
  sValue,
  idPlate,
  fnRemove,
  ...rest
}) {
  return (
    <Container {...rest}>
      <div className="container">
        <img src={imgPlate} alt="Imagem do Prato" />
        <section>
          <div className="content">
            <p>
              <span className="count">{iQuant}</span> x {sNamePlate}
              <span className="price">{sValue}</span>
            </p>
          </div>
          <button onClick={() => fnRemove(idPlate)}>Excluir</button>
        </section>
      </div>
    </Container>
  )
}
