import { Content } from "./Content";
import logo from '../logo.svg';
import { HeaderContainer } from "../styles/HeaderContainer";

export const Home = () => (
    <>
        <HeaderContainer>
            <div>
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div id="biografia">
                    <h1>Dario</h1>
                    <p>Coloque aqui sua biografia resumida. Coloque aqui sua biografia resumida. Coloque aqui sua biografia resumida. Coloque aqui sua biografia resumida. Coloque aqui sua biografia resumida. Coloque aqui sua biografia resumida. Coloque aqui sua biografia resumida.</p>
                    </div>
            </div>
        </HeaderContainer>
        <Content />
    </>
);