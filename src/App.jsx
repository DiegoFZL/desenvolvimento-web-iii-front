import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Cabecalho from './components/Cabecalho'
import CardModulo from './components/CardModulo'
import Clientes from './pages/clientes/page'
import ListaClientes from './pages/clientes/ListaClientes'
import CadastroCliente from './pages/clientes/CadastroCliente'
import Funcionarios from './pages/funcionarios/page'
import ListaFuncionarios from './pages/funcionarios/ListaFuncionarios'
import CadastroFuncionario from './pages/funcionarios/CadastroFuncionario'

function App() {

  const [modulos] = useState([
    {
      id: 1,
      titulo: "Gerenciamento de Produtos",
      descricao: "Cadastre e consulte os produtos disponíveis.",
      rota: "/"

    },
    {
      id: 2,
      titulo: "Gerenciamento de Clientes",
      descricao: "Cadastre e consulte os clientes da empresa.",
      rota: "/clientes"
    },
    {
      id: 3,
      titulo: "Gerenciamento de Funcionários",
      descricao: "Cadastre e consulte os funcionários da empresa.",
      rota: "/funcionarios"
    }

  ])

  return (
    <Routes>
      <Route
        path='/'
        element={
          <div className='aplicacao'>
            <main className='conteudo-principal'>
              <Cabecalho />

              <h1>Sistema de gestão de Comércio</h1>
              <p className='introducao'>
                Aplicação desenvolvida nas disciplinas de Desenvolvimento Web III e
                Tópicos de Programação II.
              </p>
              <section className='modulos'>
                {modulos.map(modulo => (
                  <CardModulo
                    key={modulo.id}
                    titulo={modulo.titulo}
                    descricao={modulo.descricao}
                    rota={modulo.rota}
                  />
                ))}
              </section>
            </main>
          </div>
        }
      />

      <Route path='/clientes' element={<Clientes />} />
      <Route path='/clientes/listar' element={<ListaClientes />} />
      <Route path='/clientes/cadastrar' element={<CadastroCliente />} />
      
      <Route path='/funcionarios' element={<Funcionarios />} />
      <Route path='/funcionarios/listar' element={<ListaFuncionarios />} />
      <Route path='/funcionarios/cadastrar' element={<CadastroFuncionario />} />
      
    </Routes>
  )
}

export default App
