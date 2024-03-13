import { createRouter, createRoute } from "@tanstack/react-router";
import { rootRoute } from "./index";
import Ex1 from "@renderer/pages/ex1";
import Ex2 from "@renderer/pages/ex2";
import Ex3 from "@renderer/pages/ex3";
import Ex4 from "@renderer/pages/ex4";
import Ex5 from "@renderer/pages/ex5";
import Ex6 from "@renderer/pages/ex6";

const ex1Route = createRoute({
    path: "/ex1",
    component: Ex1,
    getParentRoute: () => rootRoute,
});

const ex2Route = createRoute({
    path: "/ex2",
    component: Ex2,
    getParentRoute: () => rootRoute,
});

const ex3Route = createRoute({
    path: "/ex3",
    component: Ex3,
    getParentRoute: () => rootRoute,
});

const ex4Route = createRoute({
    path: "/ex4",
    component: Ex4,
    getParentRoute: () => rootRoute,
});

const ex5Route = createRoute({
    path: "/ex5",
    component: Ex5,
    getParentRoute: () => rootRoute,
});

const ex6Route = createRoute({
    path: "/ex6",
    component: Ex6,
    getParentRoute: () => rootRoute,
});

rootRoute.addChildren([
    ex1Route,
    ex2Route,
    ex3Route,
    ex4Route,
    ex5Route,
    ex6Route,
]);

const router = createRouter({
    routeTree: rootRoute,
});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

export default router;
