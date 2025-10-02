import Films from "./components/Films.tsx";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";


const Parent=styled.div`
    width: 100vw;
    margin: 0 auto;
    padding: 0;
    background: #3d5529;
`;

const Title=styled.h1`
    text-align: center;
    font-size: calc(60px + 1.6vw);
    color: antiquewhite;
`;

export default function App() {
    return (
        <Parent>
            <GlobalStyles />
            <Title>Studio Ghibli Movies</Title>
            <Films />
        </Parent>
    );
}
