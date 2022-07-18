import React from "react";

function Icone(props) {
    return (
        <ion-icon name={props.nome}></ion-icon>
    );
}

function Imagem(props) {
    return (
        <img src={props.imagem} alt="" />
    );
}

export default function Navbar() {
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <Icone nome="logo-instagram" />
                    <div class="separador"></div>
                    <Imagem imagem="./assets/img/logo.png" />
                </div>

                <div class="logo-mobile">
                    <Icone nome="logo-instagram" />
                </div>

                <div class="instagram-mobile">
                    <Imagem imagem="./assets/img/logo.png" />
                </div>
        
                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
        
                <div class="icones">
                    <Icone nome="paper-plane-outline" />
                    <Icone nome="compass-outline" />
                    <Icone nome="heart-outline" />
                    <Icone nome="person-outline" />
                </div>

                <div class="icones-mobile">
                    <Icone nome="paper-plane-outline" />
                </div>
            </div>
        </div>
    );
}