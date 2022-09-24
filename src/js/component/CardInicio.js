import React, {Component,useContext}from "react";
import { Link } from "react-router-dom";


export const CardInicio = (props) => {


  return (
    <div className="col-4">
      <div className={props.margen} style={{ width: props.tamaño, height: "400px" }}>
        <img class="card-img-top" id="portada" src={props.url} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{props.titulo}</h5>
          <p class="card-text">{props.texto}</p>
          <Link to={props.ruta}>
            <a class="btn btn-dark">{props.bt}</a>
          </Link>
          

        </div>
      </div>
    </div>
  );
};