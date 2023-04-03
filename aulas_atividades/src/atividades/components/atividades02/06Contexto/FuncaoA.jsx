import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import CorContext from "./MyContext"

const FuncaoA = () => {
    const cores = { bkgA: "green", bkgB: "red", bkgC: "yellow", bkgD: "blue" }
    return (
        <CorContext.Provider value={cores}>
            <div>
                <h1 style={{ backgroundColor: cores.bkgA }}>Função A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </CorContext.Provider>
    )
}

export default FuncaoA