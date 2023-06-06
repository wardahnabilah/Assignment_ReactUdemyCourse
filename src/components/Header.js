import React from 'react'

export function Header({title, description}) {
  return (
    <>
        <h1 className="mb-2 text-3xl font-bold">{title}</h1>
        <p className="mb-12 text-lg">{description}</p>
    </>
  )
}
