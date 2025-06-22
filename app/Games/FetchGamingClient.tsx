'use client';
import BeatLoader from 'react-spinners/BeatLoader'; 
import { useState } from "react";
import Link from "next/link";
import InfiniteScroll from 'react-infinite-scroll-component';
import Sidebar from '../components/Sidebar';

export default function GameListClient({
    initialNext,
    initialGames,
    apiKey
}: {
    initialNext: string;
    initialGames: any[];
    apiKey: any
}) {
    const [next, setNext] = useState(initialNext);
    const [games, setGames] = useState(initialGames);
    const [query, setQuery] = useState("");

    console.log(apiKey)

    const LoadMore = async () => {
        if (!next) return;

        const res = await fetch(next);
        const data = await res.json();

        setGames(prev => [...prev, ...data.results]);
        setNext(data.next);
    };

    const handleSearch = async (e: any) => {
        const q = e.target.value;
        setQuery(q);
        if (e.keyCode === 13 && q.trim() !== "") {
            const encoded = encodeURIComponent(q.trim());
            const response = await fetch(`https://api.rawg.io/api/games?search=${encoded}&key=${apiKey}`);
            const data1 = await response.json();
            setGames(data1.results);
            setNext(data1.next);
        } else if (q.trim() === "") {
            setGames(initialGames);
            setNext(initialNext);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-900">
            {/* Sidebar */}
            <aside className="w-64 h-screen sticky top-0 overflow-y-auto bg-gray-900 p-4 text-white hidden md:block border-r border-gray-700">
                <Sidebar />
            </aside>

            
            <main className="flex-1 p-6">
                
                <div className="relative w-full max-w-md mx-auto mb-6">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {games.map((game: any) => (
                            <div
                                key={game.id}
                                className="relative bg-gray-800 rounded-xl shadow-md overflow-hidden text-white transform transition-transform duration-300 hover:scale-105"
                            >
                                <img
                                    src={game.background_image}
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

                                    <div className="absolute top-0 left-0 w-full  bg-gradient-to-r from-orange-500 to-blue-500">
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </main>
        </div>
    );
}