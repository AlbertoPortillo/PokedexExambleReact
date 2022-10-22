//librerias
import React, {useState, useEffect, useContext} from 'react'
//servicios 
import { getPokemon } from '../../service/PokeApi';
import { AuthContext } from '../../config/AuthContext';
import { types } from '../../type/type';
//interfaces
import { responseDetails } from '../../models/apiResponses';
//componentes
import HearderHolder from './components/HearderHolder';
import ImgHolder from './components/ImgHolder';
import HabsHolder from './components/HabsHolder';
//estilos
import '../../style/list.css'

export default function List() {
  const minID = 1;
  const maxID = 511;
  const [idPokemon, setidPokemon] = useState(minID)
  const [infoPokemon, setInfoPokemon] = useState<any>({})
  const { dispatch, poke } = useContext( AuthContext )

  useEffect(() => {
    setPokemon()
  }, [idPokemon])
  
  function nextPokemon(adding: boolean){
    if(adding && idPokemon < maxID) return setidPokemon(idPokemon + 1);
    else if(!adding &&idPokemon > minID)return setidPokemon(idPokemon - 1);
  }

  async function setPokemon(){
    const pokemoninfo : responseDetails = await getPokemon(idPokemon)
    if(!pokemoninfo.error){
      setInfoPokemon(pokemoninfo.data)
    }
  }

  function verFavorito(){
    let object = typeof poke == 'string' ?JSON.parse(poke) :poke
    setidPokemon(object?.id)
  }

  function selectFav(){
    dispatch({
      type: types.save,
      payload:{
        name: infoPokemon?.name,
        id: infoPokemon?.id,
        img: infoPokemon?.sprites?.front_default
      }
    })
  }

  return (
    <div className='list-container-body'>
        <HearderHolder changePokemon={nextPokemon} fav={poke} setFav={selectFav} verfav={verFavorito} />
        <div className='list-container-box'>
            <ImgHolder name={infoPokemon?.name} id={infoPokemon?.id} img={infoPokemon?.sprites?.front_default} shiny={infoPokemon?.sprites?.front_shiny} />
            <HabsHolder types={infoPokemon?.types} habs={infoPokemon?.abilities}/>
        </div>
    </div>
  )
}
