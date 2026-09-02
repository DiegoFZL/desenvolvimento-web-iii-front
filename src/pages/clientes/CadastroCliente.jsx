import { useState } from "react";
import { Link } from "react-router";

export default function CadastroCliente() {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')

    function cadastrar(evento) {
        evento.preventDefault()

        const novoCliente = {
            nome,
            cpf,
            telefone,
            email
        }

        console.log(novoCliente)
        alert("Cliente cadastrado com sucesso!")
    }

    return (
        <main className="pagina-clientes">
            <h1>Cadastrar novo cliente</h1>

            <form className="formulario-cliente" onSubmit={cadastrar}>
                <label htmlFor="nome">Nome</label>
                <input id="nome" type="text" value={nome} onChange={e => setNome(e.target.value)} required/>

                <label htmlFor="cpf">CPF</label>
                <input id="cpf" type="text" value={cpf} maxLength={11} onChange={e => setCpf(e.target.value)} required/>

                <label htmlFor="telefone">Telefone</label>
                <input id="telefone" type="text" value={telefone} maxLength={11} onChange={e => setTelefone(e.target.value)} required/>

                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" value={email} maxLength={11} onChange={e => setEmail(e.target.value)} required/>

                <button type="submit">Cadastrar Cliente</button>
            </form>

            <Link to="/clientes">Voltar para o Gerenciamento de Clientes</Link>
        </main>
    )
}