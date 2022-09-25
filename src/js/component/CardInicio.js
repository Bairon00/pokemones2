import React, {Component,useContext}from "react";
import { Link } from "react-router-dom";


export const CardInicio = (props) => {


  return (
    <div className="col-4">
      <div className={props.margen} style={{ width: props.tamaño, height: "400px" ,marginTop:props.top}}>
        <img className="card-img-top rounded" id="portada" src={props.url} alt="Card image cap" />
        <div className="card-body">
          <h5 classNames="card-title">{props.titulo}</h5>
          <p className="card-text">{props.texto}</p>
          <Link to={props.ruta}>
            <a className="btn btn-dark">{props.bt}</a>
          </Link>
          

        </div>
      </div>
    </div>
  );
};