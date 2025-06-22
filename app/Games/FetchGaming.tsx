
import GameListClient from "./FetchGamingClient";


export default async function FetchGaming() 
    {
        const res  =  await fetch(`https://api.rawg.io/api/games?page=1&page_size=21&key=${process.env.RAWG_API_KEY}`)
        
        const rawgKey = process.env.RAWG_API_KEY
        console.log(rawgKey)
    
if(!res.ok) {
    throw new Error ('Error')
}
    
    const data = await res.json();
    
    
    return(
<>
        
        <GameListClient initialNext={data.next} initialGames={data.results} apiKey={rawgKey} />
</>
        
    )
}
    