import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <article>
      <h1>Komponen Pertama Saya</h1>
      <ol>
        <li>Komponen: Pembangun Balok UI</li>
        <li>Mendefinisikan suatu Komponen</li>
        <li>Menggunakan suatu komponen</li>
      </ol>
    </article>
  )
}

export default App
