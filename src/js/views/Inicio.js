import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext"
import PropTypes from "prop-types";
import { checkPropTypes } from "prop-types";

export const Inicio = () => {
   
    const [lista, setLista] = useState([])
    const { store, actions } = useContext(Context);
    
    console.log(store.Pokemones)
    return (
        <div>
            {store.Pokemones.map((obj,indice)=>{
                return(
                    <li>{obj.name}</li>
                )
            })}
        </div>
    )
}