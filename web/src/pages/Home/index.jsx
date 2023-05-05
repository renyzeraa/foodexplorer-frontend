import { Container } from './style'
import { Header } from '../../components/Header'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/Footer'
import fruits from '../../assets/fruits-header.svg'
import { Card } from '../../components/Card'
import bolodamasco from '../../assets/pratos/molla.png'

export function Home({ admin = true }) {
    return (
        <Container>
            {admin ? <Header /> : <Header />}
            <main>
                <header>
                    <div className="img-content">
                        <img src={fruits} alt="" />
                    </div>
                    <div className="text-content">
                        <h1>Sabores inigualáveis</h1>
                        <p>
                            Sinta o cuidado do preparo com ingredientes
                            selecionados
                        </p>
                    </div>
                </header>
                <section className="content">
                    <h1>Pratos principais</h1>
                    <div className="cards">
                        <Card
                            title="Bolo de Damasco"
                            description="Damascos frescos em uma massa sem glúten."
                            price="19,97"
                            img={bolodamasco}
                        ></Card>
                        <Card
                            title="Bolo de Damasco"
                            description="Damascos frescos em uma massa sem glúten."
                            price="19,97"
                            img={bolodamasco}
                        ></Card>
                        <Card
                            title="Bolo de Damasco"
                            description="Damascos frescos em uma massa sem glúten."
                            price="19,97"
                            img={bolodamasco}
                        ></Card>
                        <Card
                            title="Bolo de Damasco"
                            description="Damascos frescos em uma massa sem glúten."
                            price="19,97"
                            img={bolodamasco}
                        ></Card>
                    </div>
                </section>
                <section className="content">
                    <h1>Sobremesas</h1>
                    <div className="cards">
                        <Card
                            title="Bolo de Damasco"
                            description="Damascos frescos em uma massa sem glúten."
                            price="19,97"
                            img={bolodamasco}
                        ></Card>
                        <Card
                            title="Bolo de Damasco"
                            description="Damascos frescos em uma massa sem glúten."
                            price="19,97"
                            img={bolodamasco}
                        ></Card>
                        <Card
                            title="Bolo de Damasco"
                            description="Damascos frescos em uma massa sem glúten."
                            price="19,97"
                            img={bolodamasco}
                        ></Card>
                        <Card
                            title="Bolo de Damasco"
                            description="Damascos frescos em uma massa sem glúten."
                            price="19,97"
                            img={bolodamasco}
                        ></Card>
                    </div>
                </section>
                <section className="content">
                    <h1>Bebidas</h1>
                    <div className="cards">
                        <Card
                            title="Bolo de Damasco"
                            description="Damascos frescos em uma massa sem glúten."
                            price="19,97"
                            img={bolodamasco}
                        ></Card>
                        <Card
                            title="Bolo de Damasco"
                            description="Damascos frescos em uma massa sem glúten."
                            price="19,97"
                            img={bolodamasco}
                        ></Card>
                        <Card
                            title="Bolo de Damasco"
                            description="Damascos frescos em uma massa sem glúten."
                            price="19,97"
                            img={bolodamasco}
                        ></Card>
                        <Card
                            title="Bolo de Damasco"
                            description="Damascos frescos em uma massa sem glúten."
                            price="19,97"
                            img={bolodamasco}
                        ></Card>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </Container>
    )
}
