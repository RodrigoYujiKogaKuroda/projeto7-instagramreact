import React from "react";

function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.img} alt="" />
            <div class="texto">
                <strong>{props.nomeConta}</strong>
                {props.nomeUsuario}
            </div>
        </div>
    );
}

export default function Conteudo() {
    return (
        <Usuario
        img="./assets/img/catanacomics.svg"
        nomeConta="catanacomics"
        nomeUsuario="Catana"
        />
    );
}