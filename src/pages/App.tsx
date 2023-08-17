import { Routes, Route } from 'react-router-dom';

import Home from './Home.tsx'
import About from './About.tsx'
import Contacts from './Contacts.tsx'
import NotFound from './NotFound.tsx'
import Main from './Main.tsx'
import Redirect from './Redirect.tsx';
import Showcase from './Showcase.tsx';

import ButtonsPage from './showcase/Buttons.tsx';
import BadgesPage from './showcase/Badges.tsx';
import GridPage from './showcase/Grid.tsx';
import SpacersPage from './showcase/Spacers.tsx';
import LineChartPage from './showcase/LineChart.tsx';

import { TabBar } from '~/pages/components/TabBar/TabBar.tsx'

function App() {

  return (
    <div className={'pb-9'}>

      <div className={'mb-3'}>
        <Routes>
          <Route path={'/'} element={<Redirect path={'/main'}/>}></Route>

          <Route path={'main'} element={<Main/>}>
            <Route path={''} element={<Home/>}></Route>
            <Route path={'about'} element={<About/>}></Route>
            <Route path={'contacts'} element={<Contacts/>}></Route>
          </Route>

          <Route path={'/showcase'} element={<Showcase />}>
            <Route path={''} element={<Redirect path={'line-chart'}/>}></Route>
            <Route path={'grid'} element={<GridPage/>}></Route>
            <Route path={'buttons'} element={<ButtonsPage/>}></Route>
            <Route path={'badges'} element={<BadgesPage/>}></Route>
            <Route path={'spacers'} element={<SpacersPage/>}></Route>
            <Route path={'line-chart'} element={<LineChartPage/>}></Route>
          </Route>

          <Route path={'*'} element={<NotFound/>}></Route>
        </Routes>
      </div>

      <TabBar />

    </div>
  )
}

export default App
