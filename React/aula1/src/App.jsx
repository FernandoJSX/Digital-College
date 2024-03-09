import Noticia from "./components/Noticia";
import Noticias from "./components/Noticias";

const BoasVindas = ({ nome, veterano }) => {
  return (
    <>
      {
        veterano ? <h1>Resultado verdadeiro {nome}</h1 > : <h1>Resultado falso {nome}</h1>
      }
    </>
  )
}
const App = () => {
  return (
    <>
      {/* <BoasVindas nome="Nathan" veterano={false}/>
      <BoasVindas nome="Junior" veterano={true}/> */}
      <Noticias>
        <Noticia titulo={"Titulo 1"} descricao={"Descrição 1"} />
        <Noticia titulo={"Titulo 2"} descricao={"Descrição 2"} />
        <Noticia titulo={"Titulo 3"} descricao={"Descrição 3"} />
      </Noticias>
    </>
  )
}

export default App;