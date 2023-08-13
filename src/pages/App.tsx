import { Routes, Route } from 'react-router-dom'
import { Header, Box } from '~/uikit';

import Home from './Home.tsx'
import About from './About.tsx'
import Contacts from './Contacts.tsx'
import NotFound from './NotFound.tsx'

function App() {

  return (
    <div className={'pb-9'}>

      <Header />

      <div className={'container py-5 mb-3'}>
        <Routes>
          <Route path={'/'} element={<Home/>}></Route>
          <Route path={'/about'} element={<About/>}></Route>
          <Route path={'/contacts'} element={<Contacts/>}></Route>
          <Route path={'*'} element={<NotFound/>}></Route>
        </Routes>
      </div>

      <div className="container">
        <Box>Test box</Box>
      </div>

    </div>
  )
}

export default App
