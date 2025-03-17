import React from 'react';
import { useState } from 'react'
import ConfirmacaoExcluirConta from './paginas/confirmacaoExcluirConta';
import GerenciamentoPrincipal from './paginas/gerenciamentoPrincipal';
import ExcluirConta from './paginas/excluirConta';

function GerenciamentoConta ()
{
      
    const [paginaSelecionada, setPaginaSelecionada] = useState("GERENCIAMENTO");

    const mudarPagina = (nomepagina) => {
      setPaginaSelecionada(nomepagina)
    }

    return (
        <>
          {
            paginaSelecionada === "GERENCIAMENTO" ? <GerenciamentoPrincipal mudarPagina={mudarPagina} /> :
              paginaSelecionada === "EXCLUIRCONTA" ? <ExcluirConta mudarPagina={mudarPagina} /> : 
              paginaSelecionada === "CONFIRMAREXCLUSAO" ? <ConfirmacaoExcluirConta /> : <></>
          }
        </>
    )
}

export default GerenciamentoConta;