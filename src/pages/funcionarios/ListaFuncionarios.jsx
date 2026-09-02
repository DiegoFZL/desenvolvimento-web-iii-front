import { Link } from "react-router";
export default function ListaFuncionarios() {
    const funcionarios = [
        {
            id: 1,
            nome: 'Ana Souza',
            cpf: '12345678901',
            email: 'ana@email.com',
        },
        {
            id: 2,
            nome: 'Bruno Lima',
            cpf: '23456789012',
            email: 'bruno@email.com',
        },
        {
            id: 3,
            nome: 'Carla Mendes',
            cpf: '34567890123',
            email: 'carla@email.com',
        },
    ]

    return (
        <main className="pagina-clientes">
            <h1>Lista de Funcionários</h1>
            <ul className="lista-clientes">
                {funcionarios.map(funcionario => (
                    <li key={funcionario.id}>
                        <strong>{funcionario.nome}</strong>
                        <span>CPF: {funcionario.cpf}</span>
                        <span>E-mail: {funcionario.email}</span>
                    </li>
                ))}
            </ul>
            <Link to={"/funcionarios"}>Voltar para Gerenciamento de Funcionários</Link>
        </main>
    )
}