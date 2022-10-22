import axios from "axios";
import { url } from "../environment/env";
import { errorGetList } from "../environment/errorMSG";

export async function getPokemonList(actualSizeList: number){
    try{
        let list:any = await axios.get(`${url}/pokemon/?limit=20&offset=${actualSizeList}`)
        return { error: false, data: list['data']['results'] }
    }catch(error){
        return{ error: true, msg: errorGetList }
    }
};

export async function getPokemon(id: number){
    try{
        let list:any = await axios.get(`${url}/pokemon/${id}`)
        return { error: false, data: list['data'] }
    }catch(error){
        return{ error: true, msg: errorGetList }
    }
};