# t3_act4_react

Mini aplicación de **lista de tareas** hecha con React y Vite.

Permite agregar tareas nuevas y marcarlas como completadas (se tachan al dar clic). Con ella practiqué los conceptos fundamentales de React: componentes, props, estado, eventos y renderizado de listas.

## Tecnologías

- React
- Vite
- GitHub Pages (despliegue con `gh-pages`)

## Estructura de la aplicación

| Componente | Qué hace |
|------------|----------|
| `Titulo` | Componente funcional simple que muestra el encabezado. |
| `Tarea` | Recibe por **props** el texto, si está hecha y la función `onToggle`, y muestra cada tarea. |
| `App` | Usa **useState** para guardar la lista de tareas y el texto del input; maneja los eventos de agregar y marcar tareas, y renderiza la lista con `.map()` y `key`. |

## Cómo ejecutarlo en local

```bash
npm install
npm run dev
```

Después abre `http://localhost:5173/t3_act4_react/` en el navegador.

## Cómo desplegarlo

```bash
npm run deploy
```

## Preguntas

### a) ¿Qué diferencia hay entre props y state en React?

Las **props** son datos que un componente recibe de su componente padre; sirven para configurarlo y el componente no puede modificarlas (son de solo lectura). El **state** es información propia del componente que puede cambiar con el tiempo; cuando cambia, React vuelve a renderizar el componente para mostrar los datos nuevos. En mi app, `Tarea` recibe props (`texto`, `hecha`), mientras que `App` guarda el state (`tareas`, `nueva`).

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

Porque React usa la `key` para identificar cada elemento de la lista. Así sabe cuál se agregó, cuál cambió y cuál se eliminó, y actualiza solo lo necesario en lugar de redibujar todo. Sin keys únicas pueden aparecer errores, advertencias y comportamientos raros, sobre todo cuando la lista cambia. En mi app uso `key={t.id}` con un id único para cada tarea.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.

`useState` sirve para que un componente "recuerde" un valor entre renders. Devuelve el valor actual y una función para cambiarlo; cuando llamo a esa función, React actualiza el valor y vuelve a dibujar el componente con la información nueva. En mi mini aplicación la usé en `App` para guardar el arreglo de tareas (`const [tareas, setTareas] = useState([...])`) y el texto que escribo en el input (`const [nueva, setNueva] = useState('')`). Así, al presionar "Agregar" o hacer clic en una tarea, la pantalla se actualiza sola.

### d) Enlace del repositorio de GitHub

https://github.com/Karla-2311/t3_act4_react.git

### e) Enlace del proyecto desplegado en GitHub Pages

https://karla-2311.github.io/t3_act4_react/

