import CorContext from "./MyContext"

const FuncaoB = () => {
    return (
        //V1  - legado
        <CorContext.Consumer>
            {
                (cor) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: cor }}>Função B</h1>
                        </div>
                    )
                }
            }
        </CorContext.Consumer>
    )
}

export default FuncaoB