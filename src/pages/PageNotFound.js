import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'

export function PageNotFound() {
  return (
    <main className="px-6 py-12 text-center">
      <Header title="Oops, page not found!" />
      <div className="w-80 h-64 mx-auto mb-12">
        <img className="w-full h-full object-cover rounded-xl" src="/assets/images/page-not-found.jpg" alt="Page not found" />
      </div>
      <Link to ="/" className="w-[15rem] h-[3rem] px-4 py-2 mx-auto text-white text-lg font-semibold bg-blue-800 hover:bg-blue-900 rounded-lg"> Go back to word counter </Link>
    </main>
  )
}
