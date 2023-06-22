/*const stage = '/dev'
const ApiUrl = 'https://wthwk4ghue.execute-api.us-east-1.amazonaws.com'

export function games() {
  return send('/games/fetch')
}

function send(path, body) {
  return fetch(ApiUrl + stage + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : {}
  }).then(response).then(success)
}

function response(response) {
  return response ? response.json() : Promise.reject('Error Interno')
}

function success(response) {
  return response.status === 'success' ? response.data : Promise.reject(response.data)
}
*/

import moment from 'moment';
import Games from './games.json'

export interface Game {
  uuid: string;
  index: number;
  fecha_publicacion: string;
  titulo: string;
  descripcion_es: string;
  descripcion_en: string;
  descripcion?: string;
  thumbnail: string;
  url: {
    tipo: string;
    link: string;
  }[];
  tags: string[];
  externo?: boolean;
}

export async function fetch_games(lang : string): Promise<Game[]> {
  return Games.map((g) => resolveLang(g, lang)).sort(sortGames)
}

function resolveLang(game : Game, lang : string): Game {
  return {
    ...game,
    descripcion: lang === 'es' ? game.descripcion_es : game.descripcion_en
  }
}

function sortGames(a: Game, b: Game) {
  return moment(a.fecha_publicacion).isBefore(b.fecha_publicacion) ? 1 : -1
}