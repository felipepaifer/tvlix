class RouteRule {
    constructor({ routeName, routePath, allowAllUsers }) {
        this.routeName = routeName
        this.routePath = routePath
    }
}

const routes = [
    new RouteRule({
        routeName: "home",
        routePath: "/",
    }),

    new RouteRule({
        routeName: "properties",
        routePath: "/properties",
    })
]

export default routes
