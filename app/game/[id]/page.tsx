import HorizontalScroll from '@/app/components/Scroll'
import ScreenshotSlider from './ScreenshotsSlider'

export default async function gameid({params} ) {
  const {id} = await params
  const rawgKey = process.env.RAWG_API_KEY
  const [gameRes , screenshotRes] = await Promise.all([
    fetch(`https://api.rawg.io/api/games/${id}?key=${process.env.RAWG_API_KEY}`),
    fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.RAWG_API_KEY}`),

  ])
  
    if(!gameRes.ok || !screenshotRes.ok ) {
      throw new Error ('Failed to fetch the data ')
    }
    const game = await gameRes.json()
    console.log(game)

    const {results: screenshots} = await screenshotRes.json()

    return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans">
      <div className="container mx-auto rounded-xl overflow-hidden  shadow-lg">
  <img
    src={game.background_image}
    alt="Game background"
    className="w-full h-96 object-center opacity-30"
  />
</div>
<div className='container mx-auto  py-10 '>
  <HorizontalScroll gameId={id} apiKey={rawgKey}/></div>
<ScreenshotSlider screenshots={screenshots} />
{/* <div className="container mx-auto my-4 py-10">
  <div className="flex flex-wrap items-center gap-4">
    <span className="text-xl font-bold text-white">Buy Here:</span>

    {game.stores.map((store: any) => (
      <a
        key={store.id}
        href={`https://${store.store.domain}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-cyan-900 text-cyan-300 hover:bg-cyan-800 transition whitespace-nowrap flex-shrink-0 transform hover:scale-105 py-2 px-4"
      >
        {store.store.name}
      </a>
    ))}
  </div>
</div> */}

    </div>
  );
}