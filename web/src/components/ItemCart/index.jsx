import { Container } from './style'

export function ItemCart({
  imgPlate,
  iQuant,
  sNamePlate,
  sValue,
  idPlate,
  ...rest
}) {
  function handleRemoveCart(idPlate) {}

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
          <button onClick={handleRemoveCart}>Excluir</button>
        </section>
      </div>
    </Container>
  )
}
