import React from "react";

function GerenciamentoPrincipal(props )  {
  
    const goexcluir = () =>{
        props.mudarPagina("EXCLUIRCONTA")
    }
 
    return (
        <>
            <h2>Gerenciamento de Conta</h2>
            <div className="option" onClick={goexcluir}>
                <p>Excluir conta <span>&gt;</span></p>
            </div>

            <button className="botao" onClick={goexcluir}>
                <div className="option" onClick={goexcluir}>
                    <p>Excluir conta <span>&gt;</span></p>
                </div>
                 
                
            </button>

             

        </>
    )
}

export default GerenciamentoPrincipal