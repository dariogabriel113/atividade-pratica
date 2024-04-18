import logo from '../logo.svg';
import { HeaderContainer } from '../styles/HeaderContainer';
import { TopContainer } from "../styles/TopContainer";
import { MainMenu } from "./MainMenu";

export const Header = () => (
    <>
        <HeaderContainer>
            <header>
                <MainMenu />
                <TopContainer>
                    <div>
                        <div>
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                        <div id="biografia">
                            <h1>Dario</h1>
                            <p>Coloque aqui sua biografia resumida. Coloque aqui sua biografia resumida. Coloque aqui sua biografia resumida. Coloque aqui sua biografia resumida. Coloque aqui sua biografia resumida. Coloque aqui sua biografia resumida. Coloque aqui sua biografia resumida.</p>
                        </div>
                    </div>
                </TopContainer>
            </header>
        </HeaderContainer>
    </>
);