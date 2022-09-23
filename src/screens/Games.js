import React, { Component } from 'react';
import moment from "moment";

import Cartridge from '../components/Cartridge'
import Loading from '../components/Loading'
import * as Api from '../lib/Api'
import { open_tab } from '../utils';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
//import "swiper/css/free-mode";
import "swiper/css/pagination";


export default class Games extends Component {
  state = {
    loading: true,
    games: []
  }

  componentDidMount() {
    Api.games().then(data => {
      this.setState({games: [...data], loading: false})
    }).catch(e => {
      console.log(e)
      this.setState({loading: false})
    })
  }

  render() {
    return (
      <div>
        <div style={bannerStyle}>
          <div>
          </div>
        </div>
        <div>
          {this.state.loading && <Loading />} 
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {this.state.games.sort(sortGames).map((game, i) => (
              <SwiperSlide><Cartridge key={i} {...game} /></SwiperSlide>
            ))
            }
          </Swiper>
        </div>
      </div>
    )
  }
}

function sortGames(a, b) {
  return moment(a.fecha_publicacion).isBefore(b.fecha_publicacion) ? 1 : -1
}

const bannerStyle = {
  marginBottom: 64,

  //backgroundImage: 'url(img/banner.png)',
  //backgroundAttachment: 'fixed',
  //backgroundRepeat: 'no-repeat',
  //backgroundSize: 'length',
  backgroundColor: '#5599ff',
  textAlign: 'center',
  minHeight: 320,
  width: '100%',
  color: 'white'
}