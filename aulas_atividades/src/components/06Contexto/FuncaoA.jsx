import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import CorContext from "./MyContext"

const FuncaoA = () => {
    const cor = "red"
    return (
        <CorContext.Provider value={cor}>
            <div>
                <h1 style={{ backgroundColor: cor }}>Função A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </CorContext.Provider>
    )
}

export default FuncaoA