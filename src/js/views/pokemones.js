import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext"
import PropTypes from "prop-types";
import { checkPropTypes } from "prop-types";
import { CardInicio } from "../component/CardInicio";
import {CardPokemones} from "../component/CardPokemones"
import { useParams } from "react-router";

export const Pokemones = () => {
    const params = useParams();
    const { store, actions } = useContext(Context);
    
    return (
        <div className="container row " style={{marginLeft:"80px",marginTop:"-80px"}}>
            {store.Pokemones.map((obj,indice)=>{
                return<CardPokemones
                titulo={obj.name}
                url={obj.sprites.front_default}
                indice={obj.id}
                
                
    
                />
            })}
        </div>
    )
}


