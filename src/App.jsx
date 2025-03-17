import GerenciamentoConta from './assets/gerenciamentoConta'

function App() {


  return (
    <>
      <main className="background">
        <div className="container">

          <aside className="conteudo">
            <h2>Olá, Cláudia</h2>

            <ul>
              <li>Meus dados <span>&gt;</span></li>
              <li>Endereço cadastrado <span>&gt;</span></li>
              <li>Locais salvos no mapa <span>&gt;</span></li>
              <li>Históricos de relatos <span>&gt;</span></li>
              <li class="active">Propriedade da conta <span>&gt;</span></li>
            </ul>
          </aside>

          <section className="content">
            <GerenciamentoConta/>
          </section>
        </div>
      </main> 
    </>
  )
}

export default App
