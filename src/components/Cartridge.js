import React from 'react';

import { format_fecha, open_tab } from "../utils";


export default ({ html5, title, tags, url, thumbnail, fecha_publicacion, descripcion, externo }) => {
  const play = () => open_tab(html5)

  return (
    <div>
      <img src={thumbnail} className="c-img c-game-thumbnail" />
      <div>
        <h3 as='a' onClick={play}>{title}</h3>
        <span className='cinema'>{format_fecha(fecha_publicacion)}</span>
        <div>
          <p style={{width: '50%'}}>{descripcion}</p>
          {url.length > 0 && <div>
            <p>Descargar</p>
            {url.map((v, i) => <Descargar key={i} { ...v } />)}
          </div>}
        </div>
        <div>
          {tags.map(v => <label key={v}>{v}</label>)}
          <button onClick={play}>
            Jugar
          </button>
        </div>
        {externo && <div>
          {externo.descripcion} <a href={externo.url} target="blank">{externo.url}</a>
        </div>}
      </div>
    </div>
  )
}

const Descargar = ({ icon, type }) => {
  return (
    <button>
      {icon}
    </button>
  )
}
