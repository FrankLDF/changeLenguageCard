import React, { useContext } from 'react'
import { ComponentContextData, ContextData } from '../contexts/Contextdata'
import BanderaIdioma from './BanderaIdioma'
import InfoComponent from './InfoComponent'
// import PrefeComponent from './PrefeComponent'

function paginaComponent() {
    return (
      <>
      <ComponentContextData>
          <BanderaIdioma />
          <InfoComponent />
    </ComponentContextData>
      </>
  )
}

export default paginaComponent
