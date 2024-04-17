import { Link } from "react-router-dom";
import { MainMenuContainer } from "../styles/MainMenuContainer";

export const MainMenu = () => (
    <MainMenuContainer>
        <ul>
            <li><Link to={"/"}>Blog</Link></li>
            <li><Link to={"/sobre"}>Sobre</Link></li>
            <li><Link to={"/descricao"}>Descricao</Link></li>
        </ul>
    </MainMenuContainer>
);