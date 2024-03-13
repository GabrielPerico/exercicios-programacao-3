import { FC, useState } from "react";

import "../assets/ex3.scss";

const Ex3: FC = () => {
    const [nomes, setNomes] = useState<string[]>(["", "", "", "", ""]);
    const [nomesInvertidos, setNomesInvertidos] = useState<string[]>([
        "",
        "",
        "",
        "",
        "",
    ]);

    return (
        <main className="ex3">
            <h1>Exercício 3</h1>

            <div className="lista-nomes">
                <h2>Nomes</h2>

                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="input-group">
                        <label htmlFor={`nome-${i}`}>Nome {i + 1}</label>
                        <input
                            id={`nome-${i}`}
                            type="text"
                            onChange={(e) => {
                                const nome = e.target.value;
                                setNomes((nomes) => {
                                    nomes.splice(i, 1, nome);

                                    return nomes;
                                });
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className="btn-container">
                <button
                    type="button"
                    onClick={() => setNomesInvertidos(nomes.slice().reverse())}
                >
                    Inverter nomes
                </button>
            </div>

            <div className="nomes-invertidos">
                <h2>semoN</h2>

                {nomesInvertidos.map((nome, i, { length }) => (
                    <div className="input-group" key={i}>
                        <label htmlFor={`nome-invertido-${i}`}>
                            Nome {length - i}
                        </label>

                        <input
                            type="text"
                            id={`nome-invertido-${i}`}
                            value={nome}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Ex3;
