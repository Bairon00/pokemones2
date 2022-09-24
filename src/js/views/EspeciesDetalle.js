import { object } from "prop-types";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext"
import {CardPokemones} from "../component/CardPokemones"

export const EspeciesDetalle  = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(store.Pokemones)
    console.log(store.Pokemones)
    return (
        <li>
            {store.Pokemones.map((obj, indice) => {
                if (obj.types[0].type.name == params.name) {
                    return<CardPokemones
                    titulo={obj.name}
                    url={obj.sprites.front_default}/>
                }
                else if (obj.types[1]?.type.name == params.name) {
                    return<CardPokemones
                    titulo={obj.name}
                    url={obj.sprites.front_default}/>
                }


            })}
        </li>
    )


}