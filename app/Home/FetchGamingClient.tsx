    'use client';
import BeatLoader from 'react-spinners/BeatLoader'; 
import { Search } from "lucide-react"; 
    import { useState } from "react";
    import Link from "next/link";
    import InfiniteScroll from 'react-infinite-scroll-component';

    export default function GameListClient({
    initialNext,
    initialGames,
    apiKey
    }: {
    initialNext: string;
    initialGames: any[];
    apiKey:any
    }) {
    const [next, setNext] = useState(initialNext);
    const [games, setGames] = useState(initialGames);
    const [query , setQuery] = useState("")

    const LoadMore = async () => {
        if (!next) return;

        const res = await fetch(next);
        const data = await res.json();


        setGames(prev => [...prev, ...data.results]);
        setNext(data.next);
    };


    const handleSearch =  async (e:any) => {
const q = e.target.value
setQuery(q)
if(e.keyCode === 13 && q.trim() !== "") {
        const encoded = encodeURIComponent(q.trim());
        const response = await fetch(`https://api.rawg.io/api/games?search=${encoded}&key=${apiKey}`);
        const data1 = await response.json();
        setGames(data1.results)
        setNext(data1.next)
}
    }

    return (
        
    <>
    <div className="relative w-full max-w-md mx-auto mb-6">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

    <input
        type="text"
        placeholder="Search games..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleSearch}
        className="w-full bg-black/30 backdrop-blur-sm border border-gray-600 rounded-xl py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
    />
    </div>
        <InfiniteScroll
            dataLength={games.length}
            next={LoadMore}
            hasMore={!!next}
            loader={
            <div className="flex justify-center my-6">
                <BeatLoader color="#fff" margin={4} speedMultiplier={0.8} />
            </div>
            }
            endMessage={
            <p className="text-center text-white mt-4">🎮 No more games to show</p>
            }
        >
        <div className="container py-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {games.map((game: any) => (
            <div
                key={game.id}
                className="relative bg-gray-800 rounded-xl shadow-md overflow-hidden text-white transform transition-transform duration-300 hover:scale-105"
            >
                <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-48"
                />

                <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <Link
                    href={`/game/${game.id}`}
                    className="h-40 bg-gray-700 flex items-center justify-center rounded-lg mb-2 text-sm"
                >
                    Learn more
                </Link>

                <div>
                    <h2 className="text-lg font-semibold text-orange-400">{game.name}</h2>
                    <p className="text-sm text-gray-300">
                    Genres: {game.genres?.map((g: any) => g.name).join(', ')}
                    </p>
                    <p>
                    Platforms: {game.parent_platforms?.map(({ platform }: any) => platform.name).join(", ")}
                    </p>
                </div>
                </div>
            </div>
            ))}
        </div>
        </InfiniteScroll></>
    );
    }
