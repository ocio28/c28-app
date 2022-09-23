import React, { Component } from 'react';
import moment from "moment";

import Cartridge from '../components/Cartridge'
import Loading from '../components/Loading'
import * as Api from '../lib/Api'
import { open_tab } from '../utils';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/virtual';


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
          <h2>{actual.title}</h2>
          <Swiper
            slidesPerView={this.props.width > 700 ? 3 : 1}
            spaceBetween={8}
            centeredSlides={true}
            onSlideChange={(e) => this.setState({ index: e.activeIndex })}
          >
            {games.map((game) => (
              <SwiperSlide key={game.uuid}><img src={game.thumbnail} className="c-img c-game-thumbnail" /></SwiperSlide>
            ))
            }
          </Swiper>
          <small>{actual.descripcion}</small>
          <p>
            <button type="button" className="nes-btn is-success">Jugar</button>
          </p>
        </div>
        <div className='c-container'>
          <h1>C28</h1>
          <p>Desarrollo de videojuegos</p>
        </div>
      </div>
    )
  }
}

function sortGames(a, b) {
  return a.index < b.index ? 1 : -1
}