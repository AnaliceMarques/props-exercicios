import React from "react";
import InfosUsuario from "./InfosUsuario";

export default function CardVideo(props) {
  // const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <img src={props.infoVideo.imagem} alt="" />
      <h4>{props.infoVideo.titulo}</h4>
      <InfosUsuario infos={props.infosUser} />
    </div>
  );
}
