import React, { Component } from 'react';


function Footer() {
  return (
    <footer className='c-footer'>
      <strong>C28 - {new Date().getFullYear()}</strong>
      <p>
        <a href="mailto:develop@c28.cl">develop@c28.cl</a>
      </p>
      <small style={{ marginBottom: 16 }}>Si te gustan los juegos puedes apoyar dejando tu propina con tippin</small>
      <div id="tippin-button" data-dest="ocio28" style={{background: "#26282F"}}></div>
    </footer>
  );
}

export default Footer