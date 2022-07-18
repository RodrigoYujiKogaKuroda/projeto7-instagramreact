import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Post from "./components/Post";
import Conteudo from "./components/Conteudo";
import Sugestao from "./components/Sugestao";
import FundoMobile from "./components/FundoMobile";

export default function App() {
    return (
        <div>
            <Navbar />
            <div class="corpo">
                <div class="esquerda">
                    <Story />
                    <Post />
                </div>
        
                <div class="sidebar">
                    <Conteudo />
                    <Sugestao />

                    <div class="links">
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                    </div>

                    <div class="copyright">
                        © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
            </div>

            <FundoMobile />

        </div>
    );
}