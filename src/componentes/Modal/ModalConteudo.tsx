import Botao from "../Botao";
import { IconeModal } from "../Icones";
import Tipografia from "../Tipografia";
import "./Modal.css";

interface ModalConteudoProps {
  close: () => void;
}

const ModalConteudo = ({ close }: ModalConteudoProps) => {
  return (
    <div className="modal__conteudo">
      <IconeModal />
      <Tipografia elemento="h1" variante="h2" cor="azul">
        Boas-vindas ao Zoop!
      </Tipografia>
      <Tipografia elemento="p" variante="corpo" cor="azul">
        Aqui você já começa com vantagem, utilize o cupom
        <span className="modal__codigo--cupom">BOASVINDAS15</span> e ganhe um
        desconto de 15% em sua primeira compra no site!
      </Tipografia>
      <Botao variante="secundario" onClick={close}>
        Pegar cupom!
      </Botao>
    </div>
  );
};

export default ModalConteudo;
