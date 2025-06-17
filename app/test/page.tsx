import React from 'react'

function page() {
    const fetchTest = async ()  => {
        try {
            const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`)
            const data = res.json()
            console.log(data)
        } catch(error) {
            console.log('Error' , error)
        }
    }
  return (
    <div>Hello</div>
  )
}

export default page