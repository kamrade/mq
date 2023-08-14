import { Link } from 'react-router-dom'
import { H2 } from '~/uikit';

export default function NotFound() {
  return (
    <div>
      <H2>Page doesn't exist. Please go to <Link to={'/main'}>Home page</Link></H2>
    </div>
  );
}