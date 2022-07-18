import React from "react";

function Icone(props) {
    return (
        <ion-icon name={props.nome}></ion-icon>
    );
}

export default function FundoMobile() {
    return (
        <div class="fundo-mobile">
            <Icone nome="home" />
            <Icone nome="search-outline" />
            <Icone nome="add-circle-outline" />
            <Icone nome="heart-outline" />
            <Icone nome="person-outline" />
        </div>
    );
}