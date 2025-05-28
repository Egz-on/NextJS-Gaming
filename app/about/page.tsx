    export default async function fetchGaming() {
    const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')   
    }
    
    const data = await res.json()
    
    return (
        <div>
        {data.results.map((game : any) => (
            <div key={game.id}> 
            <h2>{game.name}</h2>
            <p>{game.released}</p>
            <img src={game.background_image} alt={game.name} />
            </div>
        ))}
        </div>
    )
    }