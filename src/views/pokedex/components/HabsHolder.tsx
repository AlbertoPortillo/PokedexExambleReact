import React from 'react'
//estilos
import '../../../style/habsHolder.css';


export default function HabsHolder({ types, habs, desciption }:any) {
  return (
    <div className='habsholder-body' >
      <div className='habsholder-box' >
          <p className='habsholder-title1' >PERFIL</p>
          <div className='habsholder-box-little'>
            <div className='habsholder-box-little-header' >
              <p className='habsholder-box-little-header-text'>TIPO</p>
            </div>
            <div className='habsholder-box-little-body'>
              {
                types?.map(({type}:any, i:number)=>{
                  return <p className={`habsholder-box-little-body-text ${type?.name} `} >{type?.name} </p>;
                })
              }
            </div>
          </div>
      </div>
      <div className='habsholder-box' >
          <p className='habsholder-title1' >HABILIDAD</p>
          {
            habs?.map(({ability}: any) =>{
              return<div className='habsholder-box-little'>
                      <div className='habsholder-box-little-header-habs' >
                        <p className='habsholder-box-little-header-text-hab'>{ability?.name}</p>
                      </div>
                    </div>
            })
          }
          
      </div>

    </div>
  )
}
