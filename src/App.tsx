import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { FaHandPointer } from 'react-icons/fa6';

import logo from '/logo.svg'
import { Game, fetch_games } from './api'
import { GameSwiper } from './components/GameSwiper';

import './lib/i18n';
import moment from 'moment';


const DEFAULT_LANGUAGE = "es"

function App() {
  const { i18n } = useTranslation()
  const [games, setGames] = useState<Game[]>([])
  const [booting, setBooting] =  useState(true)
  const [help, setHelp] = useState(true)

  const ready = () => setBooting(false)

  useEffect(() => {
    setTimeout(ready, 1000)
    fetch_games(i18n.resolvedLanguage || DEFAULT_LANGUAGE)
      .then((games) => setGames(games))
  }, [])

  if (booting) {
    return <Boot />
  }

  const handleSlideChange = () => {
    setHelp(false)
  }

  return (
    <div className='relative md:container md:mx-auto md:max-w-md font-mono bg-black h-screen flex'>
      <GameSwiper games={games.filter(paponga_filter).sort(sort_latest).sort(sort_web)} onSlideChange={handleSlideChange}/>
      {help && <div className='help-hand'>
        <FaHandPointer color='white' size={48} />
      </div>}
    </div>
  )
}

function Boot() {
  return (
    <div className='bg h-screen flex justify-center items-center'>
      <img src={logo} alt="logo paponga" className='w-24 h-24' />
    </div>
  )
}

function paponga_filter(game: Game): boolean {
  return (game.externo || game.disable) ? false : true
}

function sort_web(a: Game, b: Game): number {
  if (a.tags.includes('web')) {
    return -1
  }
  if (b.tags.includes('web')) {
    return 1
  }

  return 0
}

function sort_latest(a: Game, b: Game): number {
  return moment(a.fecha_publicacion).isBefore(b.fecha_publicacion) ? -1 : 1
}

export default App
