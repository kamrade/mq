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

      <Box>Footer box</Box>

    </div>
  );
}