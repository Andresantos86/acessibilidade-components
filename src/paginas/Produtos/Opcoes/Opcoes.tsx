import BotaoRadio from "@/componentes/BotaoRadio/BotaoRadio";
import BotaoRadioGroup from "@/componentes/BotaoRadio/BotaoRadioGroup";
import { useState } from "react";

const opcoes = [
  { id: "cor-branca", value: "branco", label: "Branco" },
  { id: "cor-prata", value: "prata", label: "Prata" },
  { id: "cor-cinza", value: "cinza-chumbo", label: "Cinza chumbo" },
];

const Opcoes = () => {

  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
  const selecionaOpcao = (e: React.ChangeEvent) => {
    setOpcaoSelecionada(e.target.id)
  } 

  return (
    <div className="pagina__produto--opcoes">
      <BotaoRadioGroup arialabel="Grupo opções de cor">
        {opcoes.map(opcao=>{
          return(
            <BotaoRadio
              id={opcao.id}
              key={opcao.label}
              nome="Escolher cor"
              selecionado={opcaoSelecionada == opcao.id}
              value={opcao.value}
              onChange={selecionaOpcao}
              textoLegenda={opcao.label}
              />
          )
        })}
      </BotaoRadioGroup>

    </div>
  );
};

export default Opcoes;
