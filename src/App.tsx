import { ThemeProvider } from "styled-components";

import Projetos from "./containers/projetos";
import Sidebar from "./containers/Sidebar";
import Sobre from "./containers/Sobre";
import EstiloGlobal, { Container } from "./styles";
import themaLight from "./Themes/light";
import themadark from "./Themes/dark";
import { useState } from "react";

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false);

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark);
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? themadark : themaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
