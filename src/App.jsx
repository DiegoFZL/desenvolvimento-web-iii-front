import './App.css'
import Cabecalho from './components/Cabecalho'
import CardModulo from './components/CardModulo'

function App() {

  return (
	<div className='aplicacao'>
		<main className='conteudo-principal'>
		<Cabecalho/>
		
		<h1>Sistema de gestão de Comércio</h1>
		<p className='introducao'>
			Aplicação desenvolvida nas disciplinas de Desenvolvimento Web III e 
			Tópicos de Programação II.
		</p>
		<section className='modulos'>
			<CardModulo
				titulo="Gerenciamento de Produtos"
				descricao="Cadastre e consulte os produtos disponíveis."
			/>
			<CardModulo
				titulo="Gerenciamento de Clientes"
				descricao="Cadastre e consulte os clientes da empresa."
			/>
			<CardModulo
				titulo="Gerenciamento de Funcionários"
				descricao="Cadastre e consulte os funcionários da empresa."
			/>
		</section>
		</main>
	</div>
  )
}

export default App
