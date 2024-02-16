import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { IoToggleSharp, IoVolumeHigh, IoVolumeMute } from "react-icons/io5";
import { useTranslation } from "react-i18next";


import { Game } from "../api";
import 'swiper/css';
import { ShareModal } from "./ShareModal";
import { FaShare } from "react-icons/fa6";


interface GameSlide {
  titulo: string,
  thumbnail: string,
  url: string,
  descripcion?: string,
  short?: string,
  muted: boolean,
  toggleMuted: MouseEventHandler<HTMLVideoElement>,
  toggleShare: any
}

interface GameSwiper {
  games: Array<Game>,
  onFirstMove: any,
  initialSlide: number
}

export function GameSwiper({ games, onFirstMove, initialSlide = 0 }: GameSwiper) {
  const swiperRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [modal, setModal] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(initialSlide)
  const [currentGame, setCurrentGame] = useState('')
  
  const toggleMuted = () => setMuted(!muted)
  const toggleModal = () => setModal(!modal)

  const handleSlideChange = (v: any) => {
    setCurrentSlide(v.realIndex)
    if (games.length > 0) {
      setCurrentGame(games[v.realIndex].titulo)
    }
  }

  useEffect(() => {

  }, [])

  return (
    <>
      <Swiper ref={swiperRef} className="w-full h-dvh" direction="vertical" slidesPerView={1} loop initialSlide={initialSlide} onSliderFirstMove={onFirstMove} onSlideChange={handleSlideChange}>
        {games.map(game => (
          <SwiperSlide key={game.uuid}>
            <GameSlide
              titulo={game.titulo}
              thumbnail={game.thumbnail}
              url={game.url[0].link}
              short={game.short}
              descripcion={game.descripcion}
              muted={muted}
              toggleMuted={toggleMuted}
              toggleShare={toggleModal} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ShareModal visible={modal} onClose={toggleModal} slide={currentSlide} game={currentGame} />
    </>
  )
}

function GameSlide({ titulo, thumbnail, url, descripcion, short, muted, toggleMuted, toggleShare }: GameSlide) {
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
      {short && <video ref={ref} src={short} autoPlay muted={muted} loop preload="auto" className="w-full h-full object-cover opacity-50" onClick={toggleMuted} />}
      <div className="absolute top-0 left-0 right-0">
        <div className="text-3xl text-center mt-10 font-bold uppercase">{titulo}</div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 flex flex-col justify-between">
        <div className="relative flex flex-col m-6">
          {short && <div className="absolute bottom-[200px] right-0 flex flex-col">
            <button onClick={toggleShare} className="mb-3">
              <FaShare size={32} />
            </button>
            <MuteIcon muted={muted} onClick={toggleMuted} />
          </div>}
          <div className="font-bold text-sm mb-6 ml-4 text-justify">{descripcion}</div>
          <button className="flex-1 bg mb-2 p-3 rounded-xl text-xl" onClick={handlePlay}>{t("jugar")}</button>
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