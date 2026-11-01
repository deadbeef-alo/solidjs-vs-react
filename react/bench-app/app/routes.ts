import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("forms", "forms/forms.tsx"),
] satisfies RouteConfig;