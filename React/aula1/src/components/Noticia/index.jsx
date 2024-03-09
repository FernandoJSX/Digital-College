import "./index.css";

const Noticia = ({ titulo, descricao }) => {
    return (
        <div className="noticia">
            <h1>{titulo}</h1>
            <p>{descricao}</p>
        </div>
    );
}

export default Noticia;