import { Link } from "react-router";

export default function Clientes() {
    return (
        <div className="pagina-clientes">
            <h1>Gerenciamento de Clientes</h1>
            <p>Escolha uma das opções:</p>
            <div className="opcoes-clientes">
                <Link to="/clientes/listar">
                    Listar clientes
                </Link>
                <Link to="/clientes/cadastrar">
                    Cadastrar novo cliente
                </Link>
            </div>
            <Link to="/">
                Voltar para página inicial
            </Link>
        </div>
    )
}