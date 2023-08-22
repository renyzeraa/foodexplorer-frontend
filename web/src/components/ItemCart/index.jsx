import { Container } from './style'

/**
 * Componente ItemCart para exibir um item no carrinho de compras.
 *
 * Este componente exibe os detalhes de um item no carrinho de compras, incluindo uma imagem, quantidade, nome e preço.
 *
 * @param {string} imgPlate - O URL da imagem do prato.
 * @param {number} iQuant - A quantidade de pratos no carrinho.
 * @param {string} sNamePlate - O nome do prato.
 * @param {string} sValue - O valor do prato.
 * @param {number} idPlate - O ID do prato.
 * @param {function} fnRemove - Uma função de retorno de chamada para remover o item do carrinho.
 * @param {object} rest - Outras propriedades passadas para o componente.
 * @returns {JSX.Element} Um componente de item no carrinho de compras.
 */
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
