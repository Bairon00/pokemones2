import React, {Component,useContext}from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"

export const CardPokemones = (props) => {
  const { store, actions } = useContext(Context);
  
  return (
    <div className="col-4">
      <div className={props.margen} style={{ width: props.tamaño, height: "400px",background:"rgb(166, 207, 242)",borderRadius:"50px",marginTop:"100px"}}>
        <img className="card-img-top" id="portada" src={props.url} alt="Card image cap" />
          <h5 className="card-title text-dark my-2">{props.titulo}</h5>
          <p className="card-text">{props.texto}</p>
          
          <button className="btn btn-danger opacity-75"
                onClick ={()=> {
                    actions.pokemonesFavoritos(props.indice);
                }}
                >
                 Atrapalo</button>
        
      </div>
    </div>
  );
};