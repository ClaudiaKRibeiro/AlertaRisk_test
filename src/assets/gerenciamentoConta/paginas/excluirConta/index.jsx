import React from "react";

function ExcluirConta(props) {

    const goexcluir = () =>{
        props.mudarPagina("CONFIRMAREXCLUSAO")
    }
 

    return (
        <>
            <h3>Isso excluirá sua conta</h3>
            <p>Você está prestes a iniciar o processo de exclusão da sua conta do AlertaRisk. 
                Seus dados e perfil não estarão mais acessíveis na plataforma, e você deixará 
                de receber alertas e atualizações sobre áreas de risco.
                </p>
            <div className="option" onClick={goexcluir}> 
                <p>Continuar <span>&gt;</span></p>
            </div>


        </>
    )
}

export default ExcluirConta