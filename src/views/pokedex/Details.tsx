import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useLoaderData } from "react-router-dom";

export async function getparamID ({ params }: any){
  return params.pokemonID
}

export default function Details() {
  const contact = useLoaderData();

  useEffect(() => {
    console.log(contact)
  }, [])
  
  return (
    <>
        <div>details</div>
        <Link to={'/'}><p>To details</p></Link>
    </>
  )
}
