import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const rootRoute = createRootRoute({
    component: () => (
        <>
            <div className="navbar">
                <Link to="/ex1">Exercício 1</Link>
                <Link to="/ex2">Exercício 2</Link>
                <Link to="/ex3">Exercício 3</Link>
                <Link to="/ex4">Exercício 4</Link>
                <Link to="/ex5">Exercício 5</Link>
                <Link to="/ex6">Exercício 6</Link>
            </div>

            <Outlet />
        </>
    ),
});
