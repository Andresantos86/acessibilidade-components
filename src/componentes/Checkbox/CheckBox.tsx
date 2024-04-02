import "./Checkbox.css"

interface CheckboxProps extends React.HTMLProps<HTMLInputElement>{
  legenda: string;
  id: string;
  htmlFor?: string;
  nome: string;
  selecionado: boolean;
  onChange: () => void;
}

const Checkbox = ({
  legenda,
  nome,
  htmlFor,
  id,
  selecionado,
  onChange,
  ...rest
}: CheckboxProps)=>{
  return(
    <label htmlFor={htmlFor} className="checkbox_legenda">
      <input 
        type="checkbox" 
        name={nome} 
        id={id} 
        checked={selecionado}
        onChange={onChange}
        {...rest}
        />
        <span>{legenda}</span>
    </label>
  )
}

export default Checkbox;