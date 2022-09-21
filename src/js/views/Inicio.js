import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext"
import PropTypes from "prop-types";
import { checkPropTypes } from "prop-types";


export const Inicio = () => {

const [lista, setLista] = useState([])
const {store,actions}=useContext(Context);
useEffect(()=>{
    
    actions.getPokemones();
    console.log(store)
    console.log()
},[])

  useEffect(() => {

        fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
            .then(result => result.json())
            .then(result => {
                for (let i = 0; i < result.results.length; i++) {
                    fetch(result.results[i].url)
                        .then(res => res.json())
                        .then(res => {
                            //setLista(res)
                            setLista(prevArray => [...prevArray,res])
                            console.log(lista)
                        })
                }
            })
            .catch(error => console.log('error', error));
    }, []); 

    return (
        <div> aaaa
           </div>
    )
}