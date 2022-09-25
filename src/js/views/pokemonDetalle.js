import React, {Component,useContext}from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"
import { useParams } from "react-router-dom";
import { object } from "prop-types";

export const PokemonDetalle=()=>{
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(store.Pokemones)
   
   return(<div className="container row">
    {store.Pokemones.map((obj,i)=>{
        if(params.name==obj.name){
           return (<div className="container row"style={{marginLeft:"130px"}}>
            <div className="col-3"><img src={obj.sprites.back_default}/></div>
            <div className="col-3"><img src={obj.sprites.front_default}/></div>
            <div className="col-3"><img src={obj.sprites.back_shiny}/></div>
            <div className="col-3"><img src={obj.sprites.front_shiny}/></div>
            <div className="col-3 bg-danger" style={{borderRadius:"50px"}}><div className="col-10">Attack</div><div>{obj.stats[1].base_stat}</div></div>
            <div className="col-3 bg-success"style={{borderRadius:"50px"}}><div className="col-10">Hp</div><div>{obj.stats[0].base_stat}</div></div>
            <div className="col-3 bg-secondary"style={{borderRadius:"50px"}}><div className="col-10">Defense</div><div>{obj.stats[2].base_stat}</div></div>
            <div className="col-3 bg-info"style={{borderRadius:"50px"}}><div className="col-10">Weight</div><div>{obj.weight}</div></div>
            <div className="col-12 smy-3 bg-primary"style={{borderRadius:"50px"}}><div className="col-4">Abilities:</div>{obj.moves[4].move.name+", "+obj.moves[15].move.name+","+obj.moves[25].move.name}</div>

            
           </div>)
        }
    })
    }

   </div>)
     
        
     
}