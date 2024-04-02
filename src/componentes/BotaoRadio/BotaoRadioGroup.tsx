import { ReactNode } from "react"

interface BotaoRadioGroupProps {
  children: ReactNode;
  legenda?: string;
  arialabel: string;
}

const BotaoRadioGroup = ({
 children,
 legenda,
 arialabel
}:BotaoRadioGroupProps)=>{
  return(
    <fieldset
      className="radio__grupo--campos"
      aria-label={arialabel}
      tabIndex={0}
      >
        {legenda && <legend className="radio__grupo--legenda">{legenda}</legend>}
        <ul className="radio__grupo--campos">{children}</ul>
    </fieldset>
  );
};

export default BotaoRadioGroup