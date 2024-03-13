import { FC, useState } from "react";

import "../assets/ex4.scss";

const Ex4: FC = () => {
    const [, setNomes] = useState<string[]>(["", ""]);
    const [nomeInterpolado, setNomeInterpolado] = useState<string>("");

    return (
        <main className="ex4">
            <h1>Exercício 4</h1>

            <div className="lista-nomes">
                <h2>Nomes</h2>

                {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="input-group">
                        <label htmlFor={`nome-${i}`}>Nome {i + 1}</label>
                        <input
                            id={`nome-${i}`}
                            type="text"
                            onChange={(e) => {
                                const nome = e.target.value;
                                setNomes((nomes) => {
                                    nomes.splice(i, 1, nome);

                                    const maxLen = Math.max(
                                        ...nomes.map((nome) => nome.length)
                                    );

                                    const nomeInterpolado = Array.from({
                                        length: maxLen,
                                    })
                                        .map((_, i) => {
                                            return nomes
                                                .map((nome) => nome[i] ?? "")
                                                .join("");
                                        })
                                        .join("");

                                    setNomeInterpolado(nomeInterpolado);

                                    return nomes;
                                });
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className="nome-interpolado">
                <h2>Nome interpolado</h2>
                <p>{nomeInterpolado}</p>
            </div>
        </main>
    );
};

export default Ex4;
