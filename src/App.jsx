
import './App.css'
import React from 'react'

function App() {
const text = 'Vite . React . Javascript . Jest . React Testing Library . Tailwind . ESLint';
  return (
    <div className="bg-slate-100 h-full w-full pb-9">
      <div >
        <a href="https://vitejs.dev" target="_blank">
          <img className="logo mx-auto h-48" src="https://vitejs.dev/logo-with-shadow.png" alt="Vite logo" />
        </a>
      </div>
      <div className="flex justify-center drop-shadow-md">
      <h1 className="font-bold text-3xl text-blue-900">
        {text}
      </h1>
    </div>
    </div>
  )
}

export default App
