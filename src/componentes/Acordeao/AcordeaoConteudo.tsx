import { ReactNode } from "react"
import "./Acordeao.css"

interface AcordeaoConteudoProps{
  children: ReactNode;
}

const AcordeaoConteudo = ({children}:AcordeaoConteudoProps)=>{
  return(
    <details className="acordeao__conteudo">{children}</details>
  )
}
export default AcordeaoConteudo;