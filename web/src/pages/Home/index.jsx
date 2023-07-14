import React, { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Card } from '../../components/Card'
import fruits from '../../assets/fruits-header.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation, Pagination])
import { api } from '../../services/api'
import { Loading } from '../../components/Loading'
import { shoppingCart } from '../../hooks/shoppingCart'
import { getReactToastify, oTiposToastify } from '../../methods/toastify'

export function Home() {
  const { user } = useAuth()
  const admin = user.isAdmin
  const [plates, setPlates] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [bHasSnack, setBHasSnack] = useState(false)
  const [bHasDessert, setBHasDessert] = useState(false)
  const [bHasCandy, setBHasCandy] = useState(false)
  const [bHasDrinks, setBHasDrinks] = useState(false)
  const { getProducts } = shoppingCart()
  const copyShoppingCart = getProducts()

  useEffect(() => {
    async function searchPlate() {
      try {
        let response
        let arrayData = []
        setLoading(true)
        response = await api.get(`/plates/search?title=${search}`)
        arrayData.push([...response.data])
        handleTitlePlates(response.data)
        response = await api.get(`/favorites/favorite_plates/`)
        arrayData.push([...response.data])
        handleViewPlates(arrayData)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        getReactToastify(
          oTiposToastify.TIPO_ERROR,
          'Não foi possível buscar os Pratos corretamente.'
        )
      }
    }
    searchPlate()
  }, [search])

  function handleViewPlates(aData) {
    let aPlates = aData[0] || []
    let aFavPlates = aData[1] || []
    aPlates.forEach(oPlate => {
      const [oPlateCart] = copyShoppingCart.filter(
        oPlateCart => oPlate.id == oPlateCart.id
      )
      const [plate] = aFavPlates.filter(oPlateFav => oPlate.id == oPlateFav.id)
      if (plate) {
        oPlate['favorite'] = true
      } else {
        oPlate['favorite'] = false
      }
      if (oPlateCart && oPlateCart.id) {
        oPlate['amount'] = oPlateCart.qtd
      }
    })
    setPlates(aPlates)
  }

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

  function loadingCard(bLoad) {
    setLoading(bLoad)
  }

  function handleSearchPlate(oEv) {
    setSearch(oEv.target.value)
  }

  /**
   * Ira verificar se possui pratos cadastrados na categoria determinada
   * @param {Array} aPlates
   */
  function handleTitlePlates(aPlates) {
    for (var oPlate of aPlates) {
      // se tiver, ira mostrar o titulo correspondente ao prato na home
      switch (oPlate.category_id) {
        case 1:
          setBHasSnack(true)
          break
        case 2:
          setBHasDessert(true)
          break
        case 3:
          setBHasCandy(true)
          break
        case 4:
          setBHasDrinks(true)
          break
      }
    }
  }

  return (
    <Container>
      {loading && <Loading></Loading>}
      <Header admin={admin} fnChange={oEv => handleSearchPlate(oEv)} />
      <main>
        <header className="header-content">
          <div className="img-content">
            <img src={fruits} alt="" />
          </div>
          <div className="text-content">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </header>
        {bHasSnack && (
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
                  .filter(plate => plate.category_id === 1)
                  .map(plate => (
                    <SwiperSlide key={plate.id}>
                      <Card
                        CardId={plate.id}
                        title={plate.title}
                        description={plate.description}
                        price={plate.value}
                        img={plate.picture}
                        amount={plate.amount}
                        isAdmin={admin}
                        fnLoading={loadingCard}
                        isFavorite={plate.favorite}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </section>
        )}
        {bHasDessert && (
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
                  .filter(plate => plate.category_id === 2)
                  .map(plate => (
                    <SwiperSlide key={plate.id}>
                      <Card
                        CardId={plate.id}
                        title={plate.title}
                        description={plate.description}
                        price={plate.value}
                        img={plate.picture}
                        amount={plate.amount}
                        isAdmin={admin}
                        fnLoading={loadingCard}
                        isFavorite={plate.favorite}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </section>
        )}
        {bHasCandy && (
          <section className="content">
            <h1>Doces</h1>
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
                        CardId={plate.id}
                        title={plate.title}
                        description={plate.description}
                        price={plate.value}
                        img={plate.picture}
                        amount={plate.amount}
                        isAdmin={admin}
                        fnLoading={loadingCard}
                        isFavorite={plate.favorite}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </section>
        )}
        {bHasDrinks && (
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
                  .filter(plate => plate.category_id === 4)
                  .map(plate => (
                    <SwiperSlide key={plate.id}>
                      <Card
                        CardId={plate.id}
                        title={plate.title}
                        description={plate.description}
                        price={plate.value}
                        img={plate.picture}
                        isAdmin={admin}
                        fnLoading={loadingCard}
                        isFavorite={plate.favorite}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </section>
        )}
      </main>
      <Footer></Footer>
    </Container>
  )
}
