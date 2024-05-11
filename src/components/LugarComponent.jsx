import React, { useContext } from 'react';
import { ContextData } from '../contexts/Contextdata';
import './LugarComponent.css';

function LugarComponent() {
    const {datos}=useContext(ContextData)
  return (
    <div className='container-direccion'>
          <h2>{datos.boton2}</h2>
          <h4>{datos.direccion}</h4>
    </div>
  );
}

export default LugarComponent
