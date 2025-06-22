    'use client'
    import { useEffect, useRef,  useState } from 'react';

    export default function MovieSlider({ gameId, apiKey }: { gameId: string, apiKey: any }) {
        const [movies, setMovies] = useState<any[]>([]);
        const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

        useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.rawg.io/api/games/${gameId}/movies?key=${apiKey}`);
            const data = await res.json();
            setMovies(data.results);
            console.log(data.results);
        };
        fetchMovies();
        },  [gameId, apiKey]);
        
        return (
        <div>
            <div className='flex '>
                {movies.map((movie , index) => (
                    <div key={movie.id}>
                        <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            className='w-96 h-64 rounded-lg shadow-lg'
                            src={movie.data.max}
                            controls
                            poster={movie.preview}
                            autoPlay
                            muted
                        />
                    </div>

                ))} 
            </div>
        </div>
        );
    }
