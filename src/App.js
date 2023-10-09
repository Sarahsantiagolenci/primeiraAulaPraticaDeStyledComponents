import "./styles.css";
import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sozing: border-box;
}
`;

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: orangered;
  height: 20vh;
  border-bottom: solid;
`;

const Main = styled.main``;

const Logo = styled.img`
  width: 10vw;
`;

const NavBar = styled.nav`
  width: 30vw;
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    color: #fff;
    font-size: 30px;
  }
`;

const Imagem = styled.div`
  background-repeat: no-repeat;
  background-size: 40% 70%;
  background-position: center center;
  background-image: url("https://encurtador.com.br/emvDJ");
  height: 70vh;
`;

export default function App() {
  return (
    <>
      <EstiloGlobal />
      <Header>
        <Logo
          src="https://play-lh.googleusercontent.com/skkQuGmlCsFl3K1_d404pVzVGLheGSNyq0val5-m6TVjJwiiYnQ5bWQqO6rEQoxrsqU"
          alt="logo lanchonete"
        />
        <NavBar>
          <ul>
            <li>Início</li>
            <li>Contato</li>
            <li>Como chegar</li>
          </ul>
        </NavBar>
      </Header>
      <Main>
        <Imagem></Imagem>
      </Main>
    </>
  );
}
