import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'

export function WordCounter() {
  const [disabled, setDisabled] = useState(true)
  const [result, setResult] = useState({characters: 0, words: 0})  

  function handleChange(event) {
    const inputValue = event.target.value

    const wordsInput = (inputValue.trim()).split(' ')

    setResult(prev => {
      return {
        ...prev,
        characters: inputValue.length,
        words: wordsInput.length
      }
    })

    if(inputValue.length !== 0) {
      setDisabled(false)
    } else {
      setResult(prev => {
        return {...prev, words: 0}
      })
      setDisabled(true)
    }
  }

  function clearInput() {
    setResult({characters: 0, words: 0})
  }
  
  return (
    <main className="px-6 py-12 text-center">
      <Header title="Word Counter" description="Free online character and word count tool" />
      <form>
        <textarea onChange={handleChange} className="w-[32rem] h-[16rem] pt-2 pl-3 border-2 border-slate-600" type="text" placeholder="Type or paste your text" />
      </form>
      <button onClick={clearInput} className="w-[6rem] h-[2.5rem] my-2 py-2 mx-auto text-white font-semibold bg-red-800 hover:bg-red-900 rounded-lg disabled:bg-slate-400 disabled:text-slate-500 disabled:cursor-not-allowed" disabled={disabled}>Clear</button>
      <div className="p-4 flex justify-between">
        <p className="w-[12rem] h-[2.5rem] py-2 mx-auto text-white font-semibold bg-blue-800 rounded-lg">Characters: {result.characters}</p>
        <p className="w-[12rem] h-[2.5rem] py-2 mx-auto text-white font-semibold bg-blue-800 rounded-lg">Words: {result.words}</p>
      </div>
    </main>
  )
}
