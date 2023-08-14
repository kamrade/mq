import { Routes, Route } from 'react-router-dom';

import Home from './Home.tsx'
import About from './About.tsx'
import Contacts from './Contacts.tsx'
import NotFound from './NotFound.tsx'
import Main from './Main.tsx'
import Redirect from './Redirect.tsx';
import Showcase from './Showcase.tsx';

function App() {

  return (
    <div className={'pb-9'}>

      <div className={'container py-5 mb-3'}>
        <Routes>
          <Route path={'/'} element={<Redirect path={'/main'}/>}></Route>

          <Route path={'main'} element={<Main/>}>
            <Route path={''} element={<Home/>}></Route>
            <Route path={'about'} element={<About/>}></Route>
            <Route path={'contacts'} element={<Contacts/>}></Route>
          </Route>

          <Route path={'/showcase'} element={<Showcase />}></Route>

          <Route path={'*'} element={<NotFound/>}></Route>
        </Routes>
      </div>



    </div>
  )
}

export default App
