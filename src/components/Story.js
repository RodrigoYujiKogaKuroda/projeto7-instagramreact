import React from "react";

export default function Story() {
    const imagens = [
        "./assets/img/9gag.svg",
        "./assets/img/meowed.svg",
        "./assets/img/barked.svg",
        "./assets/img/nathanwpylestrangeplanet.svg",
        "./assets/img/wawawicomics.svg",
        "./assets/img/respondeai.svg",
        "./assets/img/filomoderna.svg",
        "./assets/img/memeriagourmet.svg"
    ];
    const usuarios = [
        "9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"
    ];

    return (
    <div class="stories">

        {imagens.map(imagem => 
            <div class="story">
                <div class="imagem">
                <img src={imagem} />
            </div>
            <div class="usuario">
                {usuario}
            </div>
        </div>
        )}

        <Setinha />
        <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>

    </div>
    );
}