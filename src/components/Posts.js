import React from "react";

export default function Posts() {
    const posts = [
    {imagemUsuario: "./assets/img/meowed.svg", textoUsuario: "meowed", conteudo: "./assets/img/gato-telefone.svg", imagemCurtidas: "./assets/img/respondeai.svg", usuarioTexto: "respondeai", numeroCurtidas: "101.523"},
    {imagemUsuario: "./assets/img/barked.svg", textoUsuario: "barked", conteudo: "./assets/img/dog.svg", imagemCurtidas: "./assets/img/adorable_animals.svg", usuarioTexto: "adorable_animals", numeroCurtidas: "99.159"}
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
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src={post.conteudo} alt="" />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
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