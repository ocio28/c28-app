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

import Games from './games.json'

export function games(lang) {
  return Promise.resolve(Games.map((g) => resolveLang(g, lang)))
}

function resolveLang(game, lang) {
  return {
    ...game,
    descripcion: lang === 'es' ? game.descripcion_es : game.descripcion_en
  }
}
