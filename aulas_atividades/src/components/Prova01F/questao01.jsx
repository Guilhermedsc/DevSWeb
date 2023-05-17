import { useEffect, useState } from "react";

const Questao01X = () => {
    const alunos = [
        { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
        { nome: "Beltrano", notas: { ap1: 2.7, ap2: 3.5 } },
        { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } },
    ];

    //criar um vetor de medias para passar para o componente Y, nesse caso o setMedias será usado para comunicação filho->pai
    const [medias, setMedias] = useState([]);

    return (
        <>
            <h1>Questão01X</h1>
            <Questao01Y alunos={alunos} setMedias={setMedias} />
            {
                //usando map para percorrer o vetor de medias e mostrar na tela
                medias.map((elem, key) => {
                    if (elem.media <= 5.0)
                        return (
                            <p key={key}>
                                {elem.nome} {elem.media}
                            </p>
                        );
                })
            }
        </>
    );
};

const Questao01Y = ({ alunos, setMedias }) => {
    //usando useEffect para calcular as medias e passar para o componente X
    useEffect(() => {
        let media = [];
        alunos.forEach((elem) => {
            const med = (elem.notas.ap1 + elem.notas.ap2) / 2;
            //adicionando o nome e a media no vetor de medias
            media.push({ nome: elem.nome, media: med });
        });
        //usanod o setMedias para atualizar o vetor de medias do componente X
        setMedias(media);
    }, []);

    return (
        <>
            <h1>Questão01Y</h1>
        </>
    );
};

export default Questao01X;