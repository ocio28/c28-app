import React from 'react';
import { useTranslation } from 'react-i18next';

import packageInfo from '../../package.json'

function Footer() {
  const { t, i18n } = useTranslation()

  return (
    <footer className='c-footer'>
      <div>
        <LangButton lang="es">Español</LangButton>
        <LangButton lang="en">English</LangButton>
      </div>
      <strong>{packageInfo.displayName} - {new Date().getFullYear()} v{packageInfo.version}</strong>
      <p>
        <a href="mailto:develop@c28.cl">develop@c28.cl</a>
      </p>
      <label>@ocio28</label>
      <p>
        <a href="https://t.me/papongastudio">{t("telegram")}</a>
      </p>
      <p>
        {t("estilo")} <a href="https://nostalgic-css.github.io/NES.css/">NES.css</a>
      </p>
    </footer>
  );
}

const LangButton = ({ lang, children }) => {
  const { i18n } = useTranslation()
  const selected = lang === i18n.resolvedLanguage
  const className = `nes-btn ${selected ? 'is-warning' : ''} c-button-small`

  const handleLanguage = () => {
    i18n.changeLanguage(lang)
  }

  return (
    <button className={className} onClick={handleLanguage}>{children}</button>
  )
}

export default Footer