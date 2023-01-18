import React from "react";

export default function InfosUsuario(props) {
  return (
    <div className="infoUsuario">
      <img
        src={props.infos.foto}
        alt="Foto do usuário"
        className="fotoUsuario"
      />

      <h4>{props.infos.nome}</h4>
    </div>
  );
}
