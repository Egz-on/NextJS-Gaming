    'use client';

    import { useState } from "react";
    import Link from "next/link";
    import InfiniteScroll from 'react-infinite-scroll-component';

    export default function GameListClient({
    initialNext,
    initialGames
    }: {
    initialNext: string;
    initialGames: any[];
    }) {
    const [next, setNext] = useState(initialNext);
    const [games, setGames] = useState(initialGames);

    const LoadMore = async () => {
        if (!next) return;

        const res = await fetch(next);
        const data = await res.json();

        setGames(prev => [...prev, ...data.results]);
        setNext(data.next);
    };

    return (
        <InfiniteScroll
        dataLength={games.length}
        next={LoadMore}
        hasMore={!!next}
        loader={<p className="text-center text-white mt-4">Loading more games...</p>}
        endMessage={<p className="text-center text-white mt-4">🎮 No more games to show</p>}
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
        </InfiniteScroll>
    );
    }
