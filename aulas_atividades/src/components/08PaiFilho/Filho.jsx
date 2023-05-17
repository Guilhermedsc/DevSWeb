const Filho = ({falarComPai}) => {
    const btn = () => {
        falarComPai("Pai, eu te amo!")
    }

    return (
        <div>
            <h3>Filho</h3>
            <button onClick={btn}>Falar com o pai</button>
            {/* btn fica sem btn() pq assim ação acontece quando o componente 
            é chamado, assim ele vai agir apenas quando for clicado*/}
        </div>
    )
}

export default Filho;