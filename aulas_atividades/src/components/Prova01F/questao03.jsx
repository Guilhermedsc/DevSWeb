import { useState, useEffect } from "react";
import axios from "axios";

const Questao03 = () => {
    const [info, setInfo] = useState([]);

    // Função que pega as informações da API com axios e seta no State "info"
    const getInfo = () => {
        axios
            .get(
                "https://restcountries.com/v3.1/region/europe?fields=capital,population"
            )
            .then((response) => {
                setInfo(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // State que guarda o máximo e o mínimo
    const [maxino_minino, setMaximo_minimo] = useState({
        maximo: 0,
        minimo: 0,
    });

    useEffect(() => {
        if (info.length == 0) return;
        // depois de mapear pega o Máximo baseado na população
        const max = info.reduce(function (prev, current) {
            return prev.population > current.population ? prev : current;
        });

        // depois de mapear pega o Mínimo baseado na população
        const min = info.reduce(function (prev, current) {
            return prev.population < current.population ? prev : current;
        });

        // Seta maximo_minimo
        setMaximo_minimo({ maximo: max, minimo: min });
    }, [info]);

    // useEffect que chama a função getInfo
    useEffect(() => {
        getInfo();
    }, []);

    return (
        <>
            <h1>Questão 03</h1>
            <h2>Capital com maior populaçõa</h2>
            <p>{maxino_minino.maximo.capital}</p>

            <h2>Capital com menor populaçõa</h2>
            <p>{maxino_minino.minimo.capital}</p>
        </>
    );
};

export default Questao03;
