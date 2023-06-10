import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/auth';
import { Container } from './style';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import fruits from '../../assets/fruits-header.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination]);

export function Home() {
  const { user } = useAuth();
  const admin = /*user.isAdmin*/ true;
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    fetchPlates();
  }, []);
  const fetchPlates = async () => {
    try {
      const response = await axios.get('http://localhost:3000/plates');
      setPlates(response.data);
    } catch (error) {
      console.error('Error fetching plates:', error);
    }
  };
  const breakpoints = {
    // quando a largura da tela for menor ou igual a 550 pixels
    550: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    // quando a largura da tela for menor ou igual a 768 pixels
    768: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    // quando a largura da tela for maior que 768 pixels
    1024: {
      slidesPerView: 4,
      spaceBetween: 15
    }
  }

  useEffect(() => {
    fetchPlates()
  }, [search])
  const fetchPlates = async () => {
    try {
      const response = await api.get(`/plates?title=${search}`)
      setPlates(response.data)
    } catch (error) {
      console.error('Error fetching plates:', error)
    }
  }

  return (
    <Container>
      <Header admin={admin} onChange={oEv => setSearch(oEv.target.value)} />
      <main>
        <header>
          <div className="img-content">
            <img src={fruits} alt="" />
          </div>
          <div className="text-content">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </header>
        <section className="content">
          <h1>Refeições</h1>
          <div className="cards-content">
            <Swiper
              spaceBetween={20}
              className="mySwiper"
              slidesPerView={1}
              breakpoints={breakpoints}
              navigation={true}
              modules={[Pagination, Navigation]}
            >
              {plates
                .filter((plate) => plate.category_id === 1)
                .map((plate) => (

                  <SwiperSlide key={plate.id}>
                    <Card
                      title={plate.title}
                      description={plate.description}
                      price={plate.value}
                      img={plate.picture}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </section>
        <section className="content">
          <h1>Sobremesas</h1>
          <div className="cards">
            <Swiper
              spaceBetween={20}
              className="mySwiper"
              slidesPerView={1}
              breakpoints={breakpoints}
              navigation={true}
              modules={[Pagination, Navigation]}
            >
              {plates
                .filter((plate) => plate.category_id === 2)
                .map((plate) => (

                  <SwiperSlide key={plate.id}>
                    <Card
                      title={plate.title}
                      description={plate.description}
                      price={plate.value}
                      img={plate.picture}

                      isAdmin={admin}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

        </section>
        <section className="content">
          <h1>Bebidas</h1>
          <div className="cards">
            <Swiper
              spaceBetween={20}
              className="mySwiper"
              slidesPerView={1}
              breakpoints={breakpoints}
              navigation={true}
              modules={[Pagination, Navigation]}
            >
              {plates
                .filter(plate => plate.category_id === 3)
                .map(plate => (
                  <SwiperSlide key={plate.id}>
                    <Card
                      title={plate.title}
                      description={plate.description}
                      price={plate.value}
                      isAdmin={admin}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </section>

      </main>
      <Footer></Footer>
    </Container >
  )
}
