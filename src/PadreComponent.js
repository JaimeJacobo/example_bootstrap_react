import React from 'react';
import './PadreComponent.scss'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'

const PadreComponent = ()=>{
  return (
    <div className="PadreComponent container-fluid">
      <div className="row">
        <FirstComponent />
        <SecondComponent />
      </div>
    </div>
  )
}

export default PadreComponent


