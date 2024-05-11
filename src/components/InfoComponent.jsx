import React, { useContext } from 'react';
import { ContextData } from '../contexts/Contextdata';
import './InfoComponent.css'
import PrefeComponent from './PrefeComponent';
import LugarComponent from './LugarComponent'


function InfoComponent() {
    const {datos, mostrar, setMostrar}=useContext(ContextData)
    return (
      <>
        <div className="container-info">
        <h2>{datos.titulo}</h2>
        <h3>{datos.texto}</h3>
        <button onClick={() => setMostrar("profe")}>{datos.boton1}</button>
        <button onClick={() => setMostrar("lugar")}>{datos.boton2}</button>
        </div>
        <div>
            {mostrar === 'profe' && <PrefeComponent/> }
            {mostrar === 'lugar' && <LugarComponent/> }
        </div>
      </>
  );
}

export default InfoComponent
