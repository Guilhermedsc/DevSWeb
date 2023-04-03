import { useContext } from "react"
import CorContext from "./MyContext"
import FuncaoD from "./FuncaoD"

const FuncaoC = () => {
    const cores = useContext(CorContext)
    return (
        <div>
            <h1 style={{ backgroundColor: cores.bkgC }}>Função C</h1>
            <FuncaoD />
        </div>
    )
}

//se eu quiser que D use a cor, essa coisa vai ter que passar por C para chegar em D
//isso não é interessante, imagine que temos 10 caracteristicas, todos eles vão ter que passar por C para chegar em D
//pra isso existe o contexto:
//o contexto é uma forma de passar dados sem precisar passar por todos os componentes
//com contexto o componente pai pode passar dados para o componente filho sem precisar passar por todos oo outros componentes

export default FuncaoC