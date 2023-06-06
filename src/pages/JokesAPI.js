import React, { useEffect, useState } from 'react'

export function JokesAPI() {
  const [joke, setJoke] = useState('')

  useEffect(()=>{
    async function getJoke() {
      const response = await fetch("https://api.chucknorris.io/jokes/random")
      const data = await response.json()

      setJoke(data.value)
    }

    getJoke()
  }, [])
  
  return (
    <main className="px-6 py-12 text-center">
      <h1 className="text-lg">Chuck Norris Jokes</h1>
      <p className="text-lg">Free JSON API for hand curated Chuck Norris facts.</p>
      <div className="mt-6 p-4 border-2 border-slate-600">
          {joke}
      </div>
    </main>
  )
}
