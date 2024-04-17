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
                <div><h1>Dario</h1></div>
            </div>
        </HeaderContainer>
        <Content />
    </>
);