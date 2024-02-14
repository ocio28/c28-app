import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";
import { useTranslation } from "react-i18next";

import { Game } from "../api";
import 'swiper/css';


interface GameSlide {
  titulo: string,
  thumbnail: string,
  url: string,
  descripcion?: string,
  short?: string,
  muted: boolean,
  toggleMuted: MouseEventHandler<HTMLVideoElement>
}

interface GameSwiper {
  games: Array<Game>,
  onFirstMove: any,
  initialSlide: number
}

export function GameSwiper({ games, onFirstMove, initialSlide = 0 }: GameSwiper) {
  const [muted, setMuted] = useState(true)
  const toggleMuted = () => setMuted(!muted)

  return (
    <Swiper className="w-full h-dvh" direction="vertical" slidesPerView={1} loop initialSlide={initialSlide} onSliderFirstMove={onFirstMove}>
      {games.map(game => (
        <SwiperSlide key={game.uuid}>
          <GameSlide
            titulo={game.titulo}
            thumbnail={game.thumbnail}
            url={game.url[0].link}
            short={game.short}
            descripcion={game.descripcion}
            muted={muted}
            toggleMuted={toggleMuted} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

function GameSlide({ titulo, thumbnail, url, descripcion, short, muted, toggleMuted }: GameSlide) {
  const { t } = useTranslation()
  const swiperSlide = useSwiperSlide()
  const ref = useRef<HTMLVideoElement>(null)
  const handlePlay = () => redirect(url)

  useEffect(() => {
    if (ref.current !== null) {
      if (swiperSlide.isActive) {
        ref.current.play()
      } else {
        ref.current.pause()
      }
    }
  }, [swiperSlide.isActive])

  return (
    <div className="w-full h-full text-white">
      {!short && <img src={thumbnail} alt="imagen" className="w-full h-full object-cover opacity-50" />}
      {short && <video ref={ref} src={short} autoPlay muted={muted} loop className="w-full h-full object-cover opacity-50" onClick={toggleMuted} />}
      <div className="absolute top-0 left-0 right-0">
        <div className="text-3xl text-center mt-20 font-bold uppercase">{titulo}</div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 flex flex-col justify-between">
          <div className="relative flex flex-col m-6">
          {short && <div className="absolute bottom-[200px] right-0">
            <MuteIcon muted={muted} onClick={toggleMuted}/>
          </div>}
          <div className="font-bold mb-6 ml-4">{descripcion}</div>
          <button className="flex-1 bg mb-10 p-3 rounded-xl text-xl" onClick={handlePlay}>{t("jugar")}</button>
          </div>
      </div>
    </div>
  )
}

function MuteIcon({ muted, onClick }: { muted: boolean, onClick: any }) {
  return (
    <button onClick={onClick}>
      {muted ? <IoVolumeMute size={32} /> : <IoVolumeHigh size={32} />}
    </button>
  )
}


function redirect(url: string): void {
  window.location.href = url;
  //window.open(url)
}