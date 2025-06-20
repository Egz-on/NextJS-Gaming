import Link from "next/link";


export default async function LatestGames() {
const apiKey = process.env.RAWG_API_KEY;
const fetchLastGame = await fetch(` https://api.rawg.io/api/games?key=${apiKey}&ordering=-released&page_size=200`)
const data =  await fetchLastGame.json()
console.log(data)
    return(
        <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {data.results.map((game: any) => (
                            <div
                                key={game.id}
                                className="relative bg-gray-800 rounded-xl shadow-md overflow-hidden text-white transform transition-transform duration-300 hover:scale-105"
                            >
                                <img
                                    src={game.background_image ? game.background_image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"  }
                                    alt={game.name}
                                    className="w-full h-48 object-cover"
                                />

                                <div className="absolute inset-0 cursor-pointer bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out transform hover:scale-105">
                                    <div className="absolute top-4 right-4">
                                        <Link
                                            href={`/game/${game.id}`}
                                            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium rounded-full transition-colors duration-200 shadow-lg"
                                        >
                                            Learn More
                                        </Link>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <div className="space-y-3">
                                            <h2 className="text-2xl font-bold text-white leading-tight">{game.name}</h2>
                                            
                                            <div className="flex flex-wrap gap-2">
                                                {game.genres?.map((g: any, index: number) => (
                                                    <span 
                                                        key={index}
                                                        className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30"
                                                    >
                                                        {g.name}
                                                    </span>
                                                ))}
                                            </div>
                                            
                                            <div className="flex items-center space-x-2 text-sm text-gray-300">
                                                <span className="font-medium">Available on:</span>
                                                <span className="flex flex-wrap gap-1">
                                                    {game.parent_platforms?.map(({ platform }: any, index: number) => (
                                                        <span key={index} className="text-blue-300">
                                                            {platform.name}{index < game.parent_platforms.length - 1 ? ',' : ''}
                                                        </span>
                                                    ))}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-blue-500"></div>
                                </div>
                            </div>
                        ))}
                    </div>
        </div>
    )
}