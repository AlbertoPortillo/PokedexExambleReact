import React from 'react'
//estilos
import '../../../style/imgHolder.css'

export default function ImgHolder({ img, id, name, shiny }:any) {
  const [isShiny, setIsShiny] = React.useState(false)

  return (
    <div className='imgholder-body'>
      <p className='imgholder-id' >N.° {id}</p>
      <img onClick={() => setIsShiny(!isShiny)} className='imgholder-img' src={isShiny ?shiny :img} />
      <p className='imgholder-name' >{name}</p>
    </div>
  )
}
