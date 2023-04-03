import { useContext } from "react"
import CorContext from "./MyContext"

const FuncaoC = () => {
    const cores = useContext(CorContext)
    return (
        <div>
            <h1 style={{ backgroundColor: cores.bkgD }}>Função D</h1>
        </div>
    )
}

export default FuncaoD