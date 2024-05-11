import React, { useContext } from 'react'
import {ContextData} from '../contexts/Contextdata'
import francia from '../assets/francia.png'
import spain from '../assets/spain.jpg'
import uk from '../assets/uk.png'
import './BanderaIdioma.css'

function BanderaIdioma() {

  const {setIndex}= useContext(ContextData)

  return (
    <div className="contenedorBanderas">
      <div
        onClick={() => {
          setIndex(0);
        }}
        className="Banderas"
      >
        <img src={spain} alt="spain" />
      </div>
      <div
        onClick={() => {
          setIndex(1);
        }}
        className="Banderas"
      >
        <img src={uk} alt="uk" />
      </div>
      <div
        onClick={() => {
          setIndex(2);
        }}
        className="Banderas"
      >
        <img src={francia} alt="francia" />
      </div>
    </div>
  );
}

export default BanderaIdioma
