import moment from "moment";
import { InstagramIcon, PapongaIcon } from "./Icons";
import { LangButton } from "./Buttons";


export default function Footer() {
  return (
    <div className='bg-black py-8 text-center text-white'>
      <div className='p-4 flex items-center justify-center'>
        <PapongaIcon />
        <span className='ml-4'>paponga games - {moment().format('YYYY')} v0.3.0</span>
      </div>
      <div className='p-4 flex justify-center'>
        <LangButton lang="es" className='mr-4'>Español</LangButton>
        <LangButton lang='en'>English</LangButton>
      </div>
      <div className="underline"><a href="mailto:develop@paponga.com">develop@paponga.com</a></div>
      <div className="py-2"><a className="flex justify-center items-center" href="https://www.instagram.com/juegospaponga"><InstagramIcon /> @juegospaponga</a></div>
      <div className="my-2 italic underline">
        <a href="/politica">Revisa nuestra política de privacidad aqui</a>
      </div>
    </div>
  )
}