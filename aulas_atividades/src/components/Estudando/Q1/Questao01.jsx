import React, { useState, useEffect } from 'react'

const Questao01X = () => {
    const correntistas = [
        { nome: "Sicrano", aplic: { pp: 856.4, rf: 50.4, cc: 34.0 } },
        { nome: "Beltrano", aplic: { pp: 0.0, rf: 700.67, cc: 800 } },
        { nome: "Fulano", aplic: { pp: 5000.0, rf: 0.0, cc: 500 } },
    ]

    //receber um vetor de medias
    const [medias, setMedias] = useState([])

    return (
        <div>
            <Questao01Y correntistas={correntistas} setMedias={setMedias}/>
            <h1>Questao01X</h1>
            <div>
                {
                    medias.map((elem, key) => {
                    return <p key={key}>{elem.nome} {elem.media}</p>
                })
                }
            </div> 
        </div>
    )
}

const Questao01Y = ({correntistas, setMedias}) => {

    useEffect(() => {
        let media = []
        correntistas.forEach((elem) => {
            const med = (elem.aplic.pp + elem.aplic.rf + elem.aplic.cc) / 3
            media.push({nome: elem.nome, media: med})
        }) 
        setMedias(media)
    }, [])

    return (
        <>
            <h1>Questão01Y</h1>
        </>
    )
}

export default Questao01