import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext"
import PropTypes from "prop-types";
import { checkPropTypes } from "prop-types";
import { CardInicio } from "../component/CardInicio";
import {CardPokemones} from "../component/CardPokemones"

export const Pokemones = () => {
   
    const [lista, setLista] = useState([])
    const { store, actions } = useContext(Context);
    
    console.log(store.Pokemones)
    return (
        <div>
            {store.Pokemones.map((obj,indice)=>{
                return<CardPokemones
                titulo={obj.name}
                url={obj.sprites.front_default}/>
            })}
        </div>
    )
}


