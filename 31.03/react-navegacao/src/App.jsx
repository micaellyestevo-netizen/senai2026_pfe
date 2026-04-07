import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Olá, React + Vite! 🚀</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador: {count}
        </button>
      </div>
      <p className="read-the-docs">
        Edite src/App.jsx e salve para testar HMR
      </p>
    </div>
  )
}

export default App