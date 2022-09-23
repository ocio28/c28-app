import React from 'react';

import { format_fecha, open_tab } from "../utils";


export default ({ html5, title, tags, url, thumbnail, fecha_publicacion, descripcion, externo }) => {
  const play = () => open_tab(html5)

  return (
    <div>
      <img src={thumbnail} />
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
/*
export default class Cartridge extends Component {
  play = () => {
    console.log(this.props.game)
    let win = window.open(this.props.game.html5, '_blank');
    win.focus();
  }

  render() {
    let game = this.props.game
    return (
      <li className="list-group-item cs-li">
        <div className="row">
          <div className="col-12 col-md-3 align-self-center">
            <img src={game.thumbnail} alt={game.title} className="img-fluid"/>
          </div>
          <div className="col-12 col-md-9 d-flex flex-column justify-content-between">
            <div>
              <h4 className="mt-1">{game.title}</h4>
              <div>{game.icons.map((l, i) => <Tag key={i} text={l} />)}</div>
            </div>
            <div>
              <div className="p-1">
                {game.url.map((u, i) => (
                  <a key={i} className="btn btn-link text-danger" href={u.link}>
                    <i className={u.icon + " fa-2x mr-3"}></i> {u.label}
                  </a>
                ))}
              </div>
              <button type="button" className="btn btn-outline-danger btn-block text-white"
                onClick={this.play}>Jugar</button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

const Tag = ({text}) => (
  <small className="text-muted p-2">
    {text}
  </small>
)*/
