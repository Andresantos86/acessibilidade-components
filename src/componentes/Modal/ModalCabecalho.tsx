import { ReactNode } from "react";
import Botao from "../Botao";
    
interface ModalCabecalhoProps {
  children?: ReactNode;
  close: () => void;
}

const ModalCabecalho = ({ children, close }: ModalCabecalhoProps) => {
  return (
    <>
      {children}
      <Botao
        onClick={close}
        aria-label="fechar modal"
        title="fechar modal"
        style={{ float: "right", fontWeight: "bold" }}
      >
        X
      </Botao>
    </>
  );
};

export default ModalCabecalho;
