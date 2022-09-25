import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext"
import {CardFavoritos} from "../component/CardFavoritos"


export const Favoritos = () => {
    const { store, actions } = useContext(Context);
    console.log(store.pokemonesFavoritos)
    return (
        <div className="container row " style={{marginLeft:"80px",marginTop:"-80px",paddingBottom:"50px"}}>

        {store.pokemonesFavoritos?.map((obj,index)=>{
            return (
                <CardFavoritos
                url={obj.sprites.front_shiny}
                titulo={obj.name}
                indice={obj.id}
                bt="Estadisticas"
                ruta={"/detalle/"+obj.name}/>
            )
        })}
        </div>
        )
}
