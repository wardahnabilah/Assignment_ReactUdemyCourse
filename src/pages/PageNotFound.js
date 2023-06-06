import React from 'react'
import { Link } from 'react-router-dom'

export function PageNotFound() {
  return (
    <main className="py-12 flex flex-col gap-8 text-center">
      <h1 className="text-2xl font-bold">Oops, page not found!</h1>
      <div className="w-80 h-64 mx-auto">
        <img className="w-full h-full object-cover rounded-xl" src="/assets/images/page-not-found.jpg" alt="Page not found" />
      </div>
      <Link to ="/" className="w-[15rem] h-[3rem] py-2 mx-auto text-white text-lg font-semibold bg-blue-800 hover:bg-blue-900 rounded-lg"> Go back to word counter </Link>
    </main>
  )
}
