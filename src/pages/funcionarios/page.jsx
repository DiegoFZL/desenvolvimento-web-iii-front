import { Link } from "react-router";

export default function Funcionarios() {
    return (
        <div className="pagina-clientes">
            <h1>Gerenciamento de Funcionários</h1>
            <p>Escolha uma das opções:</p>
            <div className="opcoes-clientes">
                <Link to="/funcionarios/listar">
                    Listar Funcionários
                </Link>
                <Link to="/funcionarios/cadastrar">
                    Cadastrar novo Funcionário
                </Link>
            </div>
            <Link to="/">
                Voltar para página inicial
            </Link>
        </div>
    )
}