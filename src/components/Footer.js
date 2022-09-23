import React, { Component } from 'react';


export default class Footer extends Component {
  render() {
    const click = (url) => {
      const win = window.open(url, '_blank');
      win.focus();
    }

    return (
      <footer style={{ padding: 16, marginTop: 64 }}>
        <div>
          <strong>C28 - {new Date().getFullYear()}</strong>
          <button onClick={() => mail_to("develop@c28.cl")}>
            mail
          </button>
          <div id="tippin-button" data-dest="ocio28"></div>
        </div>
      </footer>
    );
  }
}


function mail_to(v) {
  window.location.href = "mailto:" + v
}