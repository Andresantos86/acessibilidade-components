import { useState } from "react";

const useAcordeao = () =>{
  // abrir a opcao correta chave string valor boolean
  const [aberturaPorItem, setAberturaPorItem] = useState<Record<string | number , boolean>>({});

  // funcao para abrir a guia clicada
  const alternarVisibilidade = (id: string | number) => {
    setAberturaPorItem((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
    
  }
  
  return{
    aberturaPorItem,
    alternarVisibilidade
  }
}

export default useAcordeao;