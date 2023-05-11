import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Ingredient } from '../../components/Ingredient'
import { TextArea } from '../../components/TextArea'
import { Link } from 'react-router-dom'
import { AiOutlineLeft, AiOutlineUpload } from 'react-icons/ai'

export function Create({ admin = true, isNew = true }) {
    return (
        <Container>
            <Header admin />
            <section>
                <div className="header">
                    <Link to="/">
                        <AiOutlineLeft /> voltar
                    </Link>
                    <h1>{isNew ? <p>Novo prato</p> : <p>Editar prato</p>}</h1>
                </div>
                <form className="content-wrapper" action="">
                    <div className="content">
                        <div className="content-img">
                            <label htmlFor="">Imagem do prato</label>
                            <label htmlFor="product">
                                <AiOutlineUpload />
                                {isNew ? (
                                    <p>Selecione imagem</p>
                                ) : (
                                    <p>Selecione imagem para alterá-la</p>
                                )}
                                <input type="file" id="product" />
                            </label>
                        </div>
                        <div className="name-category">
                            <label htmlFor="">Nome</label>
                            <Input
                                type="text"
                                placeholder="Ex.: Salada Ceasar"
                            />
                            <label htmlFor="">Categoria</label>
                            <select name="" id="">
                                <option value="refeicao">Refeição</option>
                                <option value="sobremesa">Sobremesa</option>
                                <option value="bebida">Bebida</option>
                            </select>
                        </div>
                    </div>
                    <div className="price-ingredientes">
                        <div className="content-ingredientes">
                            <label htmlFor="">Ingredientes</label>
                            <div className="ingredient">
                                <Ingredient value="Tomate" />
                                <Ingredient isNew placeholder="Adicionar" />
                            </div>
                        </div>
                        <div className="price">
                            <label htmlFor="">Preço</label>
                            <Input
                                className="price"
                                type="text"
                                placeholder="R$ 00.00"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="">Descrição</label>
                        <TextArea placeholder="Fale brevemente sobre o prato. Exemplo: Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. " />
                    </div>
                    <div className="button-submit">
                        {isNew ? (
                            <div className="edit-plate">
                                <Input
                                    className="delete"
                                    type="submit"
                                    value="Excluir prato"
                                />

                                <Input
                                    className="submit"
                                    type="submit"
                                    value="Salvar alterações"
                                />
                            </div>
                        ) : (
                            <Input
                                className="submit"
                                type="submit"
                                value="Salvar alterações"
                            />
                        )}
                    </div>
                </form>
            </section>
            <Footer />
        </Container>
    )
}
