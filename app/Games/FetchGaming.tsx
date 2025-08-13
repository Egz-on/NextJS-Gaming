import GameListClient from "./FetchGamingClient";

const rawgKey = process.env.RAWG_API_KEY;

export default async function FetchGaming() {
    const res = await fetch(`https://api.rawg.io/api/games?key=${rawgKey}`);

    if (!res.ok) {
        throw new Error('Error fetching games');
    }

    const data = await res.json();

    return (
        <>
            <GameListClient initialNext={data.next} initialGames={data.results} apiKey={rawgKey} />
        </>
    );
}
