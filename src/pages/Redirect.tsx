import { Navigate } from 'react-router-dom'

interface IRedirectProps {
  path?: string;
}

export default function Redirect(props: IRedirectProps) {
  return (
    <Navigate replace to={props.path || 'main'} />
  );
}