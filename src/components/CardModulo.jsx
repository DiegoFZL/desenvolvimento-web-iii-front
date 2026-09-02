import { Link } from "react-router"

export default function CardModulo({titulo, descricao, rota}) {
	const Card = (
		<article className="card-modulo">
			<h2>{titulo}</h2>
			<p>{descricao}</p>
		</article>
	)

	if (rota) {
		return (
			<Link to={rota} className="link-card">
				{Card}
			</Link>
		)
	}

	return Card
}
