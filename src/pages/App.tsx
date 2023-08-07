import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Box } from '~/uikit'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './Home.tsx'
import About from './About.tsx'
import Posts from './Posts.tsx'
import NotFound from './NotFound.tsx'
function App() {


  return (
    <>
      
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      </header>

      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/about'} element={<About/>}></Route>
        <Route path={'/posts'} element={<Posts/>}></Route>
        <Route path={'*'} element={<NotFound/>}></Route>
      </Routes>
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <Box>Test box</Box>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
