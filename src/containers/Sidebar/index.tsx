import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";
import { Descricao, BotaoTema, SidebarContainer } from "./styles";

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Fernando Neves</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Skiither
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-End
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
