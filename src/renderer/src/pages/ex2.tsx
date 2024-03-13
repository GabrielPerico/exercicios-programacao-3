import { FC } from "react";

import "../assets/ex2.scss";

const Ex2: FC = () => {
    return (
        <main className="ex2">
            <h1>Exercício 2</h1>

            <div className="grid">
                <div className="evento" data-response="1">
                    onClick
                </div>

                <div className="descricao" data-response="8">
                    Mouse é movimentado sobre o elemento HTML.
                </div>

                <div className="evento" data-response="2">
                    onKeyPress
                </div>
                <div className="descricao" data-response="4">
                    Elemento HTML recebe o foco.{" "}
                </div>

                <div className="evento" data-response="3">
                    onBlur
                </div>
                <div className="descricao" data-response="3">
                    Elemento HTML perde o foco.
                </div>

                <div className="evento" data-response="4">
                    onFocus
                </div>
                <div className="descricao" data-response="1">
                    Elemento recebe um clique do mouse.
                </div>

                <div className="evento" data-response="5">
                    onSubmit
                </div>
                <div className="descricao" data-response="6">
                    A página é carregada.
                </div>

                <div className="evento" data-response="6">
                    onLoad
                </div>
                <div className="descricao" data-response="7">
                    Elemento HTML tem seu valor alterado.
                </div>

                <div className="evento" data-response="7">
                    onChange
                </div>
                <div className="descricao" data-response="5">
                    Formulário é submetido
                </div>

                <div className="evento" data-response="8">
                    onMouseMove
                </div>
                <div className="descricao" data-response="2">
                    Uma tecla é pressionada e solta.
                </div>
            </div>
        </main>
    );
};

export default Ex2;
