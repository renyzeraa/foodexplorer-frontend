import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import fruits from '../../assets/fruits-header.svg'
import { Card } from '../../components/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'

import bolodamasco from '../../assets/pratos/molla.png'

export function Home({ admin = true }) {
    return (
        <Container>
            <Header />
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
                    <h1>Refeições</h1>
                    <div className="cards">
                        <Swiper
                            spaceBetween={40}
                            className="mySwiper"
                            slidesPerView={3}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                        >
                            <SwiperSlide className="card">
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                    isAdmin={admin}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide className="card">
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className="content">
                    <h1>Sobremesas</h1>
                    <div className="cards">
                        <Swiper
                            spaceBetween={40}
                            className="mySwiper"
                            slidesPerView={3}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                        >
                            <SwiperSlide className="card">
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className="content">
                    <h1>Bebidas</h1>
                    <div className="cards">
                        <Swiper
                            spaceBetween={40}
                            className="mySwiper"
                            slidesPerView={3}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                        >
                            <SwiperSlide className="card">
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card
                                    title="Bolo de Damasco"
                                    description="Damascos frescos em uma massa sem glúten."
                                    price="19,97"
                                    img={bolodamasco}
                                ></Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </Container>
    )
}
