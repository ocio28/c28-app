import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';

import * as Api from '../lib/Api'
import packageInfo from '../../package.json'

import "swiper/css";
import 'swiper/css/virtual';
import "swiper/css/navigation";
import { useTranslation } from 'react-i18next';


function Games({ width }) {
  const { t, i18n } = useTranslation()
  const [loading, setLoading] = useState(true)
  const [index, setIndex] = useState(0)
  const [games, setGames] = useState([])

  const fetchGames = async () => {
    try {
      setLoading(true)
      const reply = await Api.games(i18n.resolvedLanguage)
      setGames(reply.sort(sortGames))
    } catch (e) {
      console.error("[fetchGames]", e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGames()
  }, [])

  if (loading) {
    return <p>...</p>
  }

  if (games.length === 0) {
    return
  }

  const actual = games[index]

  return (
    <div>
      <div className='c-main nes-text'>
        <div style={{ marginTop: 16, marginBottom: 32 }}>
          <h2>{actual.titulo}</h2>
          {actual.externo ? <small>*{t("colaboracion")}</small> : null}
        </div>
        <Swiper
          slidesPerView={width > 700 ? 3 : 1}
          spaceBetween={8}
          centeredSlides={true}
          onSlideChange={(e) => setIndex(e.activeIndex)}
          navigation={true}
          modules={[Navigation]}
        >
          {games.map((game) => (
            <SwiperSlide key={game.uuid}><img src={game.thumbnail} className="c-img c-game-thumbnail" /></SwiperSlide>
          ))
          }
        </Swiper>
        <div style={{ marginTop: 32 }}>
          <div style={{ minHeight: 200 }}>
            <small>{actual.descripcion}</small>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {actual.url.map(value => (
              <a key={value.link} type="button" className="nes-btn is-success c-button-w" href={value.link} target="_blank">{t("play")} {value.tipo}</a>
            ))}
          </div>
        </div>
      </div>
      <div className='c-container'>
        <h1>{packageInfo.displayName}</h1>
        <p>{t("subtitle")}</p>
        <small>
          <p>{t("parrafo")}</p>
          <p>{t("nota")}</p>
        </small>
      </div>
    </div>
  )
}

function sortGames(a, b) {
  return a.index < b.index ? 1 : -1
}


export default Games