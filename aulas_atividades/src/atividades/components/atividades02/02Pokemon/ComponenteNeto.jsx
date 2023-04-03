import { useContext } from "react"
import n from "./context"

const ComponenteNeto = () => {
    let num = useContext(n)
    num -= 2
    return (
        <div>
            <h3>Componente Neto</h3>
            <h4>Valor: {num}</h4>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`} alt="Pokemon" />
        </div>
    )
}

export default ComponenteNeto