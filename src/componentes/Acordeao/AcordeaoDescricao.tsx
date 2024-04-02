import Tipografia from "../Tipografia";

interface AcordeaoDescricaoProps {
  id: string,
  open: boolean,
  descricao: string
}

const AcordeaoDescricao = ({
  open,
  id,
  descricao }: AcordeaoDescricaoProps) => {
    
  return (
    <div id={id} hidden={!open} className="acordeao__descricao">
      <Tipografia elemento="p" variante="corpo" cor="grafite">
        {descricao}
      </Tipografia>
    </div>
  )
}
export default AcordeaoDescricao;