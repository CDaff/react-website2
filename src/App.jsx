import { useState } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  )
}

export default App
