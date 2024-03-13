import { FC, useState, useEffect, useRef } from "react";

import "../assets/ex5.scss";

const Ex5: FC = () => {
    const [, setActive] = useState<number>(0);
    const [carousel, setCarousel] = useState<number>(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        handlePlay();

        return () => handlePause();
    }, [containerRef]);

    const handleForwards = () => {
        setActive((active) => {
            const val = (active % 5) + 1;

            if (active + 1 === 5) {
                const timeout = setTimeout(() => {
                    containerRef.current?.scrollTo({
                        left: 0,
                        behavior: "instant",
                    });

                    clearTimeout(timeout);
                }, 550);
            }

            containerRef.current?.scrollBy({
                left: 300,
                behavior: "smooth",
            });

            return val;
        });
    };

    const handlePause = () => {
        setCarousel(0);
        clearInterval(intervalRef.current);
    };

    const handlePlay = () => {
        setCarousel(1);
        intervalRef.current = setInterval(() => {
            handleForwards();
        }, 3000);
    };

    return (
        <main className="ex5">
            <h1>Exercício 5</h1>

            <div className="controls">
                <button
                    onClick={handlePause}
                    className={carousel === 0 ? "active" : undefined}
                >
                    Pause
                </button>

                <button
                    onClick={handlePlay}
                    className={carousel === 1 ? "active" : undefined}
                >
                    Play
                </button>
            </div>

            <div className="img-container" ref={containerRef}>
                <img src={`https://picsum.photos/seed/5/894/300`} />
                {Array.from({ length: 5 }).map((_, i) => (
                    <img
                        src={`https://picsum.photos/seed/${(i % 5) + 1}/894/300`}
                        key={i}
                        data-index={i}
                    />
                ))}
                <img src={`https://picsum.photos/seed/1/894/300`} />
            </div>
        </main>
    );
};

export default Ex5;
