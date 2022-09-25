import React, {Component,useContext}from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"

export const CardFavoritos = (props) => {
    const { store, actions } = useContext(Context);

  return (
    <div className="col-4">
      <div className={props.margen} style={{ width: props.tamaño, height: "400px",marginTop:"100px",height: "400px",background:"rgb(166, 207, 242)",borderRadius:"50px" }}>
        <img className="card-img-top" id="portada" src={props.url} alt="Card image cap" />
       
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">{props.texto}</p>
          <Link to={props.ruta}>
            <a className="btn btn-dark">{props.bt}</a>
          </Link>
          <button className="btn btn-danger opacity-75"
                onClick ={ ()=> {
                    actions.eliminarPokemon(props.indice);
                }}
                >
                    Liberar</button>
        

        
      </div>
    </div>
  );
};