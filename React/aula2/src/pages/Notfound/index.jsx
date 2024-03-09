import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <>
            <h1>Página não encontrada!</h1>
            <Link to={"/"}>Voltar</Link>
        </>
    )
}

export default PageNotFound;