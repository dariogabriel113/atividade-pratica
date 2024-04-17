import { PostContainer } from "../styles/PostContainer";
import { Post } from "./Post";

export const Content = () => (
    <>
        <h3>Últimas do Blog</h3>

        <PostContainer>
            <ul>
                <li><Post /></li>
                <li><Post /></li>
                <li><Post /></li>
            </ul>
        </PostContainer>
    </>
);