import React from 'react'
//estilos
import '../../../style/pokedexHeaderPurple.css';


export default function HearderHolder({ changePokemon, setFav, fav, verfav }:any) {
  const [pokefav, setPokeFav] = React.useState({
    name: '',
    id:  '',
    img: ''
  })
  React.useEffect(() => {
    if(typeof fav == 'string') setPokeFav(JSON.parse(fav))
    else setPokeFav(fav)
  }, [fav])
  // React.useEffect(() => {
  //   console.log(typeof fav)
  //   console.log(fav);
  //   console.log(pokefav)
  // }, [pokefav])
  return (
    <div className='pokedex-header-purple' >
        <h1 className='pokedex-header-title' >INFO. POKéMON</h1>
        {
          pokefav.id &&<div  className='pokedex-header-fav'>
              <button onClick={verfav}>Ver Pokemon Favorito</button>
              <img src={pokefav?.img}/>
          </div>
        }
        
        <div  className='pokedex-header-add'>
            <button onClick={setFav}>Favorito Pokemon</button>
        </div>
        <div  className='pokedex-header-add'>
            <button onClick={e => changePokemon(false)}>Anterior Pokemon</button>
        </div>
        <div  className='pokedex-header-less'>
            <button onClick={e => changePokemon(true)}>Siguiente Pokemon</button>
        </div>
    </div>
  )
}
