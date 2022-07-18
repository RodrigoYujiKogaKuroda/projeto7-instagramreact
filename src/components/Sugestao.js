import React from "react";

export default function Sugestao() {
    const sugestoes = [
        {imagem: "./assets/img/bad.vibes.memes.svg", nomeTexto: "bad.vibes.memes", razaoTexto: "Segue você"},
        {imagem: "./assets/img/chibirdart.svg", nomeTexto: "chibirdart", razaoTexto: "Segue você"},
        {imagem: "./assets/img/razoesparaacreditar.svg", nomeTexto: "razoesparaacreditar", razaoTexto: "Novo no Instagram"},
        {imagem: "./assets/img/adorable_animals.svg", nomeTexto: "adorable_animals", razaoTexto: "Segue você"},
        {imagem: "./assets/img/smallcutecats.svg", nomeTexto: "smallcutecats", razaoTexto: "Segue você"}
    ];

    return (
        <div class="sugestoes">

            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoes.map(sugestao => 
                <div class="sugestao">
                    <div class="usuario">
                        <img src={sugestao.imagem} alt="" />
                        <div class="texto">
                            <div class="nome">{sugestao.nomeTexto}</div>
                            <div class="razao">{sugestao.razaoTexto}</div>
                        </div>
                    </div>
                    <div class="seguir">Seguir</div>
                </div>
            )}

        </div>
    );
}