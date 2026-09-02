import { useState } from "react";
import { Link } from "react-router";

export default function CadastroFuncionario() {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')

    function cadastrar(evento) {
        evento.preventDefault()

        const novoFuncionario = {
            nome,
            cpf,
            telefone,
            email
        }

        console.log(novoFuncionario)
        alert("Cliente cadastrado com sucesso!")
    }

    return (
        <main className="pagina-clientes">
            <h1>Cadastrar novo Funcionários</h1>

            <form className="formulario-cliente" onSubmit={cadastrar}>
                <label htmlFor="nome">Nome</label>
                <input id="nome" type="text" value={nome} onChange={e => setNome(e.target.value)} required/>

                <label htmlFor="cpf">CPF</label>
                <input id="cpf" type="text" value={cpf} maxLength={11} onChange={e => setCpf(e.target.value)} required/>

                <label htmlFor="telefone">Telefone</label>
                <input id="telefone" type="text" value={telefone} maxLength={11} onChange={e => setTelefone(e.target.value)} required/>

                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" value={email} maxLength={11} onChange={e => setEmail(e.target.value)} required/>

                <button type="submit">Cadastrar Funcionário</button>
            </form>

            <Link to="/funcionarios">Voltar para o Gerenciamento de Funcionários</Link>
        </main>
    )
}