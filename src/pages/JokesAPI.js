import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'

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
      <Header title="Chuck Norris Jokes" description="Free JSON API for hand curated Chuck Norris facts."/>
      <div className="mt-6 p-4 border-2 border-slate-600">
          {joke}
      </div>
    </main>
  )
}
