import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      Page doesn't exist. Please go to <Link to={'/'}>Home page</Link>
    </div>
  );
}