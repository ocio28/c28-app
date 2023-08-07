import { FaWindows, FaApple, FaLinux, FaAppStoreIos, FaSteam, FaInstagram } from 'react-icons/fa'
import { IoMdAppstore } from 'react-icons/io'


const DEFAULT = 32

export function WindowsIcon() {
  return <FaWindows size={DEFAULT} />
}

export function AppleIcon() {
  return <FaApple size={DEFAULT} />
}

export function LinuxIcon() {
  return <FaLinux size={DEFAULT} />
}

export function AndroidIcon() {
  return <IoMdAppstore size={DEFAULT} />
}

export function AppStoreIcon() {
  return <FaAppStoreIos size={DEFAULT} />
}

export function SteamIcon() {
  return <FaSteam size={DEFAULT} />
}

export function PapongaIcon() {
  return <img src="logo.png" alt="paponga" className='w-16 h-16 text-center' />
}

export function PlatformIcon({ tipo } : { tipo: string }) {
  switch (tipo) {
    case "android": return <AndroidIcon />
    case "ios": return <AppStoreIcon />
    case "steam": return <SteamIcon />
    default: return <strong>WEB</strong>
  }
}

export function InstagramIcon() {
  return <FaInstagram size={DEFAULT} />
}