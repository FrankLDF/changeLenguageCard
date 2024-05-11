import React,{useContext} from 'react'
import { ContextData } from '../contexts/Contextdata'
import './ProfeComponent.css'

function PrefeComponent() {
    const { datos } = useContext(ContextData)
    const ruta = "./src/assets";
  return (
    <div className="container-perfil">
      <h2>{datos.boton1}</h2>
      <img src={`${ruta}/${datos.foto}`} alt={datos.nombre} />
      <h4>{datos.nombre}</h4>
    </div>
  );
}

export default PrefeComponent
