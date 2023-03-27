const Hero = ({ nome }) => {
    return (
        <div>
            <h1>Hero: {nome}</h1>
            <img src="https://listasnerds.com.br/wp-content/uploads/2022/01/goku-dragon-ball-9-850x560.jpg" alt="Goku" />
        </div>
    )
}

const Enemy = ({ nome }) => {
    return (
        <div>
            <h1>Enemy: {nome}</h1>
            <img src="https://criticalhits.com.br/wp-content/uploads/2020/04/kuririn-768x432.jpg" alt="Kuririn" />
        </div>
    )
}

const Arena = () => {
    return (
        <div>
            <Hero nome="Goku" />
            <Enemy nome="Kuririn" />
        </div>
    )
}

const World = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export { Hero, Enemy, Arena, World }