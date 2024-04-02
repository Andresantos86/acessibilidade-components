import { IconeSetaBaixo, IconeSetaCima } from "../Icones"
import Tipografia from "../Tipografia"

interface AcordeaoTituloprops {
  id: string,
  open: boolean,
  titulo: string,
  alternarVisibilidade: ()=> void,
}

const AcordeaoTitulo = ({
  open,
  id,
  alternarVisibilidade,
  titulo}: AcordeaoTituloprops) =>{
  return(
    <summary 
      role="button"
      className="acordeao__titulo"
      aria-expanded={open}
      aria-controls={id}
      onClick={alternarVisibilidade}
      >
      <Tipografia elemento="h2" variante="h3" cor="cinza">
        {titulo}
      </Tipografia>
      <span>{open ? <IconeSetaCima/>:<IconeSetaBaixo/>}</span>
    </summary>
  )
}
export default AcordeaoTitulo;