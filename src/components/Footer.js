import React, { Component } from 'react';


export default class Footer extends Component {
  render() {
    const click = (url) => {
      const win = window.open(url, '_blank');
      win.focus();
    }

    return (
      <footer className='c-footer'>
        <div>
          <strong>C28 - {new Date().getFullYear()}</strong>
          <p>
            <a href="mailto:develop@c28.cl">develop@c28.cl</a>
          </p>
          <div>
            <div id="tippin-button" data-dest="ocio28"></div>
          </div>
        </div>
      </footer>
    );
  }
}


function mail_to(v) {
  window.location.href = "mailto:" + v
}