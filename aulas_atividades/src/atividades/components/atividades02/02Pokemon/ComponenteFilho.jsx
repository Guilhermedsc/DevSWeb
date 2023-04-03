import { useContext } from "react"
import n from "./context"
import ComponenteNeto from "./ComponenteNeto"

const ComponenteFilho = () => {
    let num = useContext(n)
    num -= 1
    return (
        <div>
            <h3>Componente Filho</h3>
            <h4>Valor: {num}</h4>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`} alt="Pokemon" />
            <ComponenteNeto />
        </div>
    )
}

export default ComponenteFilho