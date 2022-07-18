import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Posts from "./components/Posts";
import Usuario from "./components/Usuario";
import Sugestao from "./components/Sugestao";

export default function App() {
    return (
        <div class="root">
            <Navbar />
            <div class="corpo">
                <div class="esquerda">
                    <Story />
                    <Posts />
                </div>
        
                <div class="sidebar">
                    <Usuario />
                    <Sugestao />

                    <div class="links">
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                    </div>

                    <div class="copyright">
                        © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
            </div>

            <div class="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    );
}