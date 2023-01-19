import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';

import * as Api from '../lib/Api'
import packageInfo from '../../package.json'

import "swiper/css";
import 'swiper/css/virtual';
import "swiper/css/navigation";


export default class Games extends Component {
  state = {
    loading: true,
    index: 0,
    games: []
  }

  componentDidMount() {
    Api.games().then(data => {
      this.setState({ games: data.sort(sortGames), loading: false})
    }).catch(e => {
      console.log(e)
      this.setState({loading: false})
    })
  }

  render() {
    const { index, games } = this.state

    if (games.length === 0) {
      return
    }

    const actual = games[index]

    return (
      <div>
        <div className='c-main nes-text'>
          <div style={{ marginTop: 16, marginBottom: 32 }}>
            <h2>{actual.titulo}</h2>
            {actual.externo ? <small>*colaboracion</small> : null}
          </div>
          <Swiper
            slidesPerView={this.props.width > 700 ? 3 : 1}
            spaceBetween={8}
            centeredSlides={true}
            onSlideChange={(e) => this.setState({ index: e.activeIndex })}
            navigation={true}
            modules={[Navigation]}
          >
            {games.map((game) => (
              <SwiperSlide key={game.uuid}><img src={game.thumbnail} className="c-img c-game-thumbnail" /></SwiperSlide>
            ))
            }
          </Swiper>
          <div style={{ marginTop: 32 }}>
            <div style={{ minHeight: 200 }}>
              <small>{actual.descripcion}</small>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              {actual.url.map(value => (
                <a key={value.link} type="button" className="nes-btn is-success c-button-w" href={value.link} target="_blank">Jugar en {value.tipo}</a>
              ))}
            </div>
          </div>
        </div>
        <div className='c-container'>
          <h1>{packageInfo.displayName}</h1>
          <p>Desarrollo de videojuegos</p>
          <small>
            <p>Pequeño ejercito de una persona con el objetivo de hacer videojuegos</p>
            <p>Los juegos que dicen "Jugar web" se pueden jugar en el navegador</p>
          </small>
        </div>
      </div>
    )
  }
}


function sortGames(a, b) {
  return a.index < b.index ? 1 : -1
}