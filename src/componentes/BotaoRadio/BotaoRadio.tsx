
import './BotaoRadio.css'

export interface BotaoRadioProps extends React.InputHTMLAttributes<HTMLInputElement>{
  nome: string;
  id: string;
  htmlFor?: string;
  selecionado: boolean;
  textoLegenda: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BotaoRadio = ({ nome, id, htmlFor, onChange, selecionado, textoLegenda }: BotaoRadioProps) => {  
  return (
    <li>
      <label htmlFor={htmlFor} className='botao__radio--legenda'>
        <input
          type="radio"
          name={nome}
          id={id}
          onChange={onChange}
          checked={selecionado} />
        <span>{textoLegenda}</span>

      </label>
    </li>
  )
}
export default BotaoRadio;