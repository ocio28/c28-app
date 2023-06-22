"use client"
import React, { useEffect, useState } from 'react'
import { PapongaIcon, PlatformIcon } from './components/Icons'
import Button, { LangButton } from './components/Buttons'
import GameCard from './components/Card'
import { Game, fetch_games } from '@/lib/Api'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper'
import { openGameUrl } from '@/utils'

import '../lib/i18n';
import "swiper/css";
import "swiper/css/navigation";
import moment from 'moment'


const DEFAULT_LANGUAGE = "es"


export default function Home() {
  const { t, i18n } = useTranslation()
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch_games(i18n.resolvedLanguage || DEFAULT_LANGUAGE).then((games) => setGames(games))
  }, [])
  
  return (
    <main>
      <Splash games={games} />
      <div className='text-black text-center text-5xl py-20 font-bold'>PAPONGA</div>
      <div className='bg-black p-8 py-20 flex justify-center text-center'>
        <p className='w-96'>
          {t("parrafo")}
        </p>
      </div>
      <div className='my-16 container mx-auto flex justify-center flex-wrap'>
        {games.map((game) => <GameCard key={game.uuid} game={game} />)}
      </div>
      <Footer />
    </main>
  )
}

const Breakpoints = {
  // when window width is >= 640px
  640: {
    slidesPerView: 2,
    spaceBetween: 50
    }
}

function Splash({ games }: { games: Game[]} ) {
  const { t } = useTranslation()

  return (
    <div className='bg-black pb-4'>
      <div className=''>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides
          loop
          navigation={true}
          breakpoints={Breakpoints}
          modules={[Navigation]}
        >
          {games.filter(filterGames).map((game) => (
            <SwiperSlide key={game.uuid}>
              <div className='max-w-4xl'>
                <div className='relative'>
                  <img src={game.thumbnail} alt="imagen" className='opacity-50 object-cover' style={{ width: '100%', height: 500 }} />
                  <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between'>
                    <div className='text-center text-2xl py-8 font-bold'>{game.titulo}</div>
                    <div className='flex justify-between items-center p-8'>
                      <div className='flex'>
                        {game.url.map((value) =>
                          <a key={value.link} className="mr-4" href={value.link}><PlatformIcon tipo={value.tipo} /></a>
                        )}
                      </div>
                      <Button onClick={() => openGameUrl(game.url)}>{t("jugar")}</Button>
                    </div>
                  </div>
                </div>
                <div className='p-4 py-8'>
                  <p>
                    {game.descripcion}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
    </div>
  )
}



function Footer() {
  return (
    <div className='bg-black py-8 text-center'>
      <div className='p-4 flex items-center justify-center'>
        <PapongaIcon />
        <span className='ml-4'>paponga games - {moment().format('YYYY')} v0.3.0</span></div>
      <div>develop@paponga.com</div>
      <div>@juegospaponga</div>
      <div className='p-4 flex justify-center'>
        <LangButton lang="es" className='mr-4'>Español</LangButton>
        <LangButton lang='en'>English</LangButton>
      </div>
    </div>
  )
}

function filterGames(game : Game) {
  return !game.externo
}