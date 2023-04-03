import CorContext from "./MyContext"

const FuncaoB = () => {
    return (
        //V1  - legado
        <CorContext.Consumer>
            {
                (cores) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: cores.bkgB }}>Função B</h1>
                        </div>
                    )
                }
            }
        </CorContext.Consumer>
    )
}

export default FuncaoB