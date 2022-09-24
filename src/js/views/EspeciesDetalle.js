import { object } from "prop-types";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext"

export const EspeciesDetalle  = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(store.Pokemones)
    console.log(store.Pokemones)
    return (
        <li>
            {store.Pokemones.map((obj, indice) => {
                if (obj.types[0].type.name == params.name) {
                    return (<li>{obj.name}</li>)
                }
                else if (obj.types[1]?.type.name == params.name) {
                    return (<li>{obj.name}</li>)
                }


            })}
        </li>
    )


}