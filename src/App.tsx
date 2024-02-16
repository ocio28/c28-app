import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { FaHandPointer } from 'react-icons/fa6';
import store from 'store2';

import logo from '/logo.svg'
import { Game, fetch_games } from './api'
import { GameSwiper } from './components/GameSwiper';

import './lib/i18n';
import { slide_param } from './utils';


const DEFAULT_LANGUAGE = "es"

function App() {
  const { i18n } = useTranslation()
  const [games, setGames] = useState<Game[]>([])
  const [booting, setBooting] =  useState(true)
  const [help, setHelp] = useState(true)
  const [initialSlide, setInitialSlide] = useState(0)

  const ready = () => setBooting(false)

  useEffect(() => {
    const hideHelp: boolean = store('hidehelp')
    if (hideHelp) {
      setHelp(false)
    }

    const slideParam = slide_param();
    if (slideParam) {
      setInitialSlide(Number(slideParam))
    }

    setTimeout(ready, 1000)
    fetch_games(i18n.resolvedLanguage || DEFAULT_LANGUAGE).then(setGames)
  }, [])

  const handleFirstMove = () => {
    if (help) {
      setHelp(false)
      store('hidehelp', true)
    }
  }

  const data = games.filter(paponga_filter).sort(sort_latest)

  return (
    <div className='relative md:container md:mx-auto md:max-w-md font-mono bg-black h-screen flex'>
      <GameSwiper games={data} onFirstMove={handleFirstMove} initialSlide={initialSlide} />
      <Help visible={help} />
      {booting && <Boot />}
    </div>
  )
}

function Boot() {
  return (
    <div className='absolute top-0 left-0 right-0 bg h-screen flex justify-center items-center z-[1000]'>
      <img src={logo} alt="logo paponga" className='w-24 h-24' />
    </div>
  )
}

function Help({ visible }: { visible: boolean }) {
  if (!visible) {
    return
  }

  return (
    <div className='help-hand'>
      <FaHandPointer color='white' size={48} />
    </div>
  )
}

function paponga_filter(game: Game): boolean {
  return (game.externo || game.disable) ? false : true
}

function sort_latest(a: Game, b: Game): number {
  return a.index > b.index ? -1 : 1
}

export default App
