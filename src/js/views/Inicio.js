import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext"
import PropTypes from "prop-types";
import { checkPropTypes } from "prop-types";
import { CardInicio } from "../component/CardInicio";

export const Inicio = () => {
   
    const [lista, setLista] = useState([])
    const { store, actions } = useContext(Context);
    
    return (
        <div className="container" style={{marginLeft:"300px" ,marginTop:"50px"}}>
        <div className="row ">
        <CardInicio url="https://pm1.narvii.com/6217/c20f798e4c5829503e2827350df3a55be31110a8_hq.jpg"
        bt="Pokemones"
        ruta="/Pokemones"
        tamaño="360px"
        
        />
        <CardInicio url="http://pm1.narvii.com/6362/c1eee5c348d1db518c703d6901edab51d0c4e8f4_00.jpg"
        bt="Especies"
        ruta="/Especies"
        tamaño="420px"
        />
        </div>
	</div>
    )
}