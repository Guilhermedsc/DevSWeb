import React, { useState } from "react";

// Importand imagens de frente e verso do pikachu
import img_front from "../../assets/pikachu_front.png";
import img_back from "../../assets/pikachu_back.png";

const Questao02 = () => {
    const [angulo, setAngulo] = useState(false);
    return (
        <>
            <div>Questao02 - Pikachu</div>
            {/* mostra a imagem correta de acordo com viraro */}
            <img src={!angulo ? img_front : img_back} alt="pokemon" />
            {/* inverte o valor de angulo */}
            <button onClick={() => setAngulo(!angulo)}>
                {/* Printa o texto de acordo com o State "angulo" */}
                {!angulo ? "Frente" : "Verso"}
            </button>
        </>
    );
};

export default Questao02;