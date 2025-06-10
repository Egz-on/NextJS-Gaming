    // app/components/FetchGaming.tsx (or wherever you want)

    export default async function FetchGaming() {
    const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.results.map((game: any) => (
            <div
            key={game.id}
            className="bg-gray-800 rounded-xl shadow-md overflow-hidden text-white"
            >
            <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-orange-400">{game.name}</h2>
                <p className="text-sm text-gray-300">Released: {game.released}</p>
            </div>
            </div>
        ))}
        </div>
    )
    }
