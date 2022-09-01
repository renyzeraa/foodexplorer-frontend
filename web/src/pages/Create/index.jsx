import { Container } from './style'

import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Ingredient } from '../../components/Ingredient'
import { TextArea } from '../../components/TextArea'

import { AiOutlineLeft, AiOutlineUpload } from 'react-icons/ai'

export function Create() {
  return (
    <Container>
      <HeaderAdmin />
      <section>
        <div className="header">
          <h1>Editar prato</h1>
          <a href="#">
            <AiOutlineLeft /> voltar
          </a>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <div className="content-img">
              <label htmlFor="">Imagem do prato</label>
              <label htmlFor="product">
                <AiOutlineUpload />
                Selecione imagem
                <input type="file" id="product" />
              </label>
            </div>
            <div className="name">
              <label htmlFor="">Nome</label>
              <Input type="text" placeholder="Ex.: Salada Ceasar" />
            </div>
          </div>
          <div className="price-ingredientes">
            <div>
              <label htmlFor="">Ingredientes</label>
              <div className="ingredient">
                <Ingredient value="Tomate" />
                <Ingredient value="Tomate" />
                <Ingredient isNew placeholder="Adicionar" />
              </div>
            </div>
            <div className="price">
              <label htmlFor="">Preço</label>
              <Input className="price" type="text" placeholder="R$ 00.00" />
            </div>
          </div>

          <div>
            <label htmlFor="">Descrição</label>
            <TextArea placeholder="Fale brevemente sobre o prato. Exemplo: Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. " />
          </div>
          <div className="button-submit">
            <Input className="submit" type="submit" value="Adicionar pedido" />
          </div>
        </div>
      </section>
      <Footer />
    </Container>
  )
}
