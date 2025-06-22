import HorizontalScroll from '@/app/components/Scroll'
import ScreenshotSlider from './ScreenshotsSlider'
import MovieSlider from './MovieSlider'

export default async function gameid({params}: {params: {id: string}}) {
  const {id} = await params
  const rawgKey = process.env.RAWG_API_KEY
  const [gameRes , screenshotRes] = await Promise.all([
    fetch(`https://api.rawg.io/api/games/${id}?key=${rawgKey}`),
    fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${rawgKey}`),
  ])
  
    if(!gameRes.ok || !screenshotRes.ok ) {
      throw new Error ('Failed to fetch the data ')
    }
    const game = await gameRes.json()

    const {results: screenshots} = await screenshotRes.json()


    return (
    <div className="min-h-screen font-sans">
      <div className="container mx-auto rounded-xl overflow-hidden  shadow-lg">
        <MovieSlider gameId={id} apiKey={rawgKey}/>

</div>
{/* <div className='container mx-auto  py-10 '>
  <HorizontalScroll gameId={id} apiKey={rawgKey}/></div> */}
<ScreenshotSlider screenshots={screenshots} />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">{game.name}</h1>
        <p className="text-gray-700 mb-6">{game.description_raw}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {game.platforms.map((platform: any) => (
            <div key={platform.platform.id} className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{platform.platform.name}</h2>
            </div>
          ))}
        </div>
      </div>
          
    </div>
  );
}