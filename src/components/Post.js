import React from "react";

function curtir(estado) {
    let postagem = document.querySelector(`.${estado}`);
    postagem.setAttribute('name', 'heart');
    postagem.classList.add("fotoCurtida");
}

function Icone(props) {
    return (
        <ion-icon name={props.nome}></ion-icon>
    );
}

function IconeCurtir(props) {
    return (
        <ion-icon class={props.classe} onClick={() => {curtir(props.classe);}} name={props.nome}></ion-icon>
    );
}

export default function Post() {
    const posts = [
    {imagemUsuario: "./assets/img/meowed.svg", textoUsuario: "meowed", conteudo: "./assets/img/gato-telefone.svg", posicao: "foto0", imagemCurtidas: "./assets/img/respondeai.svg", usuarioTexto: "respondeai", numeroCurtidas: "101.523"},
    {imagemUsuario: "./assets/img/barked.svg", textoUsuario: "barked", conteudo: "./assets/img/dog.svg", posicao: "foto1", imagemCurtidas: "./assets/img/adorable_animals.svg", usuarioTexto: "adorable_animals", numeroCurtidas: "99.159"}
    ];

    return (
        <div class="posts">
            {posts.map(post =>
                <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={post.imagemUsuario} alt="" />
                            {post.textoUsuario}
                        </div>
                        <div class="acoes">
                            <Icone nome="ellipsis-horizontal" />
                        </div>
                    </div>

                    <div class="conteudo">
                        <img class="curtida" src={post.conteudo} alt="" onClick={() => {curtir(post.posicao);}} />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <IconeCurtir nome="heart-outline" classe={post.posicao} />
                                <Icone nome="chatbubble-outline" />
                                <Icone nome="paper-plane-outline" />
                            </div>
                            <div>
                                <Icone nome="bookmark-outline" />
                            </div>
                        </div>
                        <div class="curtidas">
                            <img src={post.imagemCurtidas} alt="" />
                            <div class="texto">
                                Curtido por <strong>{post.usuarioTexto}</strong> e <strong>outras {post.numeroCurtidas} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}