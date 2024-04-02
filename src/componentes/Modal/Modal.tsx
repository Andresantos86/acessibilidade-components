import ModalCabecalho from "./ModalCabecalho";
import ModalConteudo from "./ModalConteudo";
import "./Modal.css";
import { useCallback, useEffect, useRef } from "react";

interface ModalProps extends React.HTMLProps<HTMLDialogElement>{
  open: boolean,
  ariaLabel : string,
  close: ()=>void
}

const Modal = ({
  open,
  close,
  ariaLabel,  
  ...rest
}:ModalProps)=>{
  const refModal = useRef<HTMLDialogElement>(null);

  const escutadorTecla = useCallback((event: KeyboardEvent)=>{
    if(event.key == "Escape"){
      close();
    }
  },[close])

  const capturarFoco = useCallback((event: FocusEvent)=> {
    if(!refModal.current?.contains(event.target as Node)){
      refModal.current?.focus();
    }
  },[]);

  useEffect(()=>{
    if(open){
      document.addEventListener("keydown", escutadorTecla);
      document.addEventListener("focusin", capturarFoco);   
      refModal.current?.focus();   
    }
    return ()=>{
      document.removeEventListener("keydown", escutadorTecla);
      document.removeEventListener("focusin", capturarFoco);
    }
  },[open, escutadorTecla, capturarFoco])

  return(
    <>
      <div className="modal__overlay" onClick={close}/>
      <dialog 
        className="modal__container"
        aria-label={ariaLabel}
        open={open}
        onClose={close}
        ref={refModal}
        {...rest}>
        <ModalCabecalho close={close}/>
        <ModalConteudo close={close}/>
      </dialog>
    </>
  )
}

export default Modal;