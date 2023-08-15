import { Outlet } from 'react-router-dom';
import {Box} from "~/uikit";
import { Header } from './components';

export default function Main() {
  return (
    <div>

      <Header />

      <div>
        <Outlet />
      </div>

      <div className="container">
        <Box>Footer box</Box>
      </div>

    </div>
  );
}