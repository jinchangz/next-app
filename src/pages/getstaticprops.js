
// Page Component, receiving allPokemons
// from getStaticProps
export default function Home({ allPokemons }) {
    return (
        <ul>
            { /* mapping all the data inside
            an unordered list */}
            {allPokemons.map((poke) => (
                <li key={poke.url}>{poke.name}</li>
            ))}
        </ul>
    );
}

export async function getStaticProps() {

    // Call the fetch method and passing
    // the pokeAPI link
    const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon/');

    // Parse the JSON
    const data = await response.json();

    // Finally we return the result
    // inside props as allPokemons
    return {
        props: { allPokemons: data.results },
    };
}