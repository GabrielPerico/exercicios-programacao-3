import { FC, useState } from "react";

import "../assets/ex6.scss";

const Ex6: FC = () => {
    const [cep, setCep] = useState<string>("");

    const [localidade, setLocalidade] = useState<{
        uf: string;
        cidade: string;
        logradouro: string;
    }>({
        uf: "",
        cidade: "",
        logradouro: "",
    });

    const [endereco, setEndereco] = useState<{
        bairro: string;
        complemento: string;
        ddd: string;
        gia: string;
        ibge: string;
        localidade: string;
        logradouro: string;
        siafi: string;
        uf: string;
    } | null>(null);

    return (
        <main className="ex6">
            <h1>Exercício 6</h1>

            <div className="buscas">
                <div className="cep">
                    <label htmlFor="cep">CEP</label>
                    <input
                        id="cep"
                        type="text"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                    />

                    <button
                        type="button"
                        onClick={() => {
                            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                                .then((response) => response.json())
                                .then((data) => {
                                    setEndereco(data);
                                });
                        }}
                    >
                        Buscar
                    </button>
                </div>

                <div className="localizacao">
                    {/* UF */}
                    <div className="input-group">
                        <label htmlFor="uf">UF</label>
                        <input
                            id="uf"
                            type="text"
                            value={localidade.uf}
                            onChange={(e) =>
                                setLocalidade({
                                    ...localidade,
                                    uf: e.target.value,
                                })
                            }
                        />
                    </div>

                    {/* Cidade */}
                    <div className="input-group">
                        <label htmlFor="cidade">Cidade</label>
                        <input
                            id="cidade"
                            type="text"
                            value={localidade.cidade}
                            onChange={(e) =>
                                setLocalidade({
                                    ...localidade,
                                    cidade: e.target.value,
                                })
                            }
                        />
                    </div>

                    {/* Buscar */}
                    <div className="input-group">
                        <label htmlFor="busca">Logradouro</label>
                        <input
                            id="busca"
                            type="text"
                            value={localidade.logradouro}
                            onChange={(e) =>
                                setLocalidade({
                                    ...localidade,
                                    logradouro: e.target.value,
                                })
                            }
                        />
                    </div>

                    <button
                        onClick={() => {
                            if (
                                !localidade?.uf ||
                                !localidade?.cidade ||
                                !localidade?.logradouro
                            )
                                return;
                            fetch(
                                `https://viacep.com.br/ws/${localidade.uf}/${localidade.cidade}/${localidade.logradouro}/json/`
                            )
                                .then((response) => response.json())
                                .then((data) => {
                                    if (
                                        data &&
                                        Array.isArray(data) &&
                                        data.length > 0
                                    ) {
                                        setEndereco(data[0]);
                                    }
                                });
                        }}
                    >
                        Buscar
                    </button>
                </div>
            </div>

            <div className="endereco">
                <h2>Endereço</h2>

                <table>
                    <tbody>
                        <tr>
                            <td>Bairro</td>
                            <td>{endereco?.bairro}</td>
                        </tr>
                        <tr>
                            <td>Complemento</td>
                            <td>{endereco?.complemento}</td>
                        </tr>
                        <tr>
                            <td>DDD</td>
                            <td>{endereco?.ddd}</td>
                        </tr>
                        <tr>
                            <td>GIA</td>
                            <td>{endereco?.gia}</td>
                        </tr>
                        <tr>
                            <td>IBGE</td>
                            <td>{endereco?.ibge}</td>
                        </tr>
                        <tr>
                            <td>Localidade</td>
                            <td>{endereco?.localidade}</td>
                        </tr>
                        <tr>
                            <td>Logradouro</td>
                            <td>{endereco?.logradouro}</td>
                        </tr>
                        <tr>
                            <td>SIAFI</td>
                            <td>{endereco?.siafi}</td>
                        </tr>
                        <tr>
                            <td>UF</td>
                            <td>{endereco?.uf}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default Ex6;
