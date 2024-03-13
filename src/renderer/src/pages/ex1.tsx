import { FC } from "react";

import "../assets/ex1.scss";

const Ex1: FC = () => {
    return (
        <main className="ex1">
            <h1>Exercício 1</h1>

            <div>
                <h3>Vantagens</h3>
                <ul>
                    <li data-icon="🏃‍♂️">
                        Velocidade:{" "}
                        <i>
                            Por ele ser executado imediatamente dentro do
                            navegador ele é muito rápido!
                        </i>
                    </li>

                    <li data-icon="📦">
                        Baixa carga no servidor:{" "}
                        <i>
                            Por ser executado no navegador, o servidor não
                            precisa processar o código, sendo que o código é
                            executado no computador do usuário.
                        </i>
                    </li>
                </ul>
            </div>

            <div>
                <h3>Desvantagens</h3>
                <ul>
                    <li data-icon="🧩">
                        <i>
                            <b>Compatibilidade:</b> Por ser executado no
                            navegador, a compatibilidade com navegadores mais
                            antigos pode ser um problema, já que navegadores
                            diferentes podem interpretar o código de maneira
                            diferente.
                        </i>
                    </li>
                    <li data-icon="🔒">
                        <i>
                            <b>Segurança:</b> Por ser executado no navegador, o
                            código pode ser facilmente acessado e modificado por
                            usuários mal intencionados.
                        </i>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Ex1;
