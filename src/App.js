import React from "react";
import CardVideo from "./Componentes/CardVideo";
import "./styles.css";

export default function App() {
  const infoVideo1 = {
    imagem: "https://picsum.photos/400/400?a=1 ",
    titulo: "Título do vídeo 1",
  };
  const infoVideo2 = {
    imagem: "https://picsum.photos/400/400?a=2 ",
    titulo: "Título do vídeo 2",
  };
  const infoVideo3 = {
    imagem: "https://picsum.photos/400/400?a=3 ",
    titulo: "Título do vídeo 3",
  };
  const infoVideo4 = {
    imagem: "https://picsum.photos/400/400?a=4 ",
    titulo: "Título do vídeo 4",
  };
  const infoVideo5 = {
    imagem: "https://picsum.photos/400/400?a=5 ",
    titulo: "Título do vídeo 5",
  };
  const infoVideo6 = {
    imagem: "https://picsum.photos/400/400?a=6 ",
    titulo: "Título do vídeo 6",
  };
  const infoVideo7 = {
    imagem: "https://picsum.photos/400/400?a=7 ",
    titulo: "Título do vídeo 7",
  };
  const infoVideo8 = {
    imagem: "https://picsum.photos/400/400?a=8 ",
    titulo: "Título do vídeo 8",
  };

  const infosUser1 = {
    foto: "https://i.pravatar.cc/150?img=1",
    nome: "User 1",
  };

  const infosUser2 = {
    foto: "https://i.pravatar.cc/150?img=2",
    nome: "User 2",
  };

  const infosUser3 = {
    foto: "https://i.pravatar.cc/150?img=3",
    nome: "User 3",
  };

  const infosUser4 = {
    foto: "https://i.pravatar.cc/150?img=4",
    nome: "User 4",
  };

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo infoVideo={infoVideo1} infosUser={infosUser1} />
            <CardVideo infoVideo={infoVideo2} infosUser={infosUser2} />
            <CardVideo infoVideo={infoVideo3} infosUser={infosUser3} />
            <CardVideo infoVideo={infoVideo4} infosUser={infosUser4} />
            <CardVideo infoVideo={infoVideo5} infosUser={infosUser1} />
            <CardVideo infoVideo={infoVideo6} infosUser={infosUser2} />
            <CardVideo infoVideo={infoVideo7} infosUser={infosUser3} />
            <CardVideo infoVideo={infoVideo8} infosUser={infosUser4} />
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
