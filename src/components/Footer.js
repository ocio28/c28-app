import React from 'react';

import packageInfo from '../../package.json'

function Footer() {
  return (
    <footer className='c-footer'>
      <strong>{packageInfo.displayName} - {new Date().getFullYear()} v{packageInfo.version}</strong>
      <p>
        <a href="mailto:develop@c28.cl">develop@c28.cl</a>
      </p>
      <label>@ocio28</label>
      <a href="https://t.me/papongastudio">Canal de Telegram</a>
    </footer>
  );
}

export default Footer