import { object } from "prop-types";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext"
import {CardPokemones} from "../component/CardPokemones"

export const EspeciesDetalle  = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    return (
        <div className="container row " style={{marginLeft:"80px",marginTop:"-80px"}}>
            {store.Pokemones.map((obj, indic) => {
                if (obj.types[0].type.name == params.name) {
                    return<CardPokemones
                    titulo={obj.name}
                    url={obj.sprites.front_default}
                    indice={obj.id}
                    bt="¡Atrápalos Ya!"
                    ruta={"/detalle/"+obj.name}/>
                }
                else if (obj.types[1]?.type.name == params.name) {
                    return<CardPokemones
                    titulo={obj.name}
                    url={obj.sprites.front_default}
                    indice={obj.id}
                    bt="¡Atrápalos Ya!"
                    ruta={"/detalle/"+obj.name}
                    />
                    
                }


            })}
        </div>
    )


}