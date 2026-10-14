import { useState } from 'react'

// a) Componente funcional simple
function Titulo() {
  return <h1>Mi lista de tareas</h1>
}

// b) Componente que recibe y muestra props
function Tarea({ texto, hecha, onToggle }) {
  return (
    <li
      onClick={onToggle}
      style={{
        textDecoration: hecha ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
    >
      {texto}
    </li>
  )
}

export default function App() {
  // c) Componente con estado (useState)
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Ver el video de React', hecha: true },
    { id: 2, texto: 'Crear mi proyecto', hecha: false },
    { id: 3, texto: 'Desplegar en GitHub Pages', hecha: false },
  ])
  const [nueva, setNueva] = useState('')

  // Evento: agregar tarea
  const agregar = () => {
    if (!nueva.trim()) return
    setTareas([...tareas, { id: Date.now(), texto: nueva, hecha: false }])
    setNueva('')
  }

  // Evento: marcar/desmarcar tarea
  const toggle = (id) => {
    setTareas(
      tareas.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t))
    )
  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <Titulo />

      <input
        value={nueva}
        onChange={(e) => setNueva(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregar}>Agregar</button>

      <ul>
        {/* d) Lista renderizada con .map() y key */}
        {tareas.map((t) => (
          <Tarea
            key={t.id}
            texto={t.texto}
            hecha={t.hecha}
            onToggle={() => toggle(t.id)}
          />
        ))}
      </ul>
    </div>
  )
}