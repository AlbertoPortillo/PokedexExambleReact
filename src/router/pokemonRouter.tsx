import Details, {getparamID} from "../views/pokedex/Details";

const pokemonRouter = [
    {
        path: "/pokemon/details/:pokemonID",
        element: <Details />,
        loader: getparamID
    },
];

export default pokemonRouter;
