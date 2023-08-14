import { NavLink } from 'react-router-dom';
import { AsideElement } from '~/pages/components/aside/aside-element';

export interface IAsideNavItemProps {
  title: string;
  link: string;
  innerPadding?: number;
}

export const AsideNavItem = ({ title, link, innerPadding }: IAsideNavItemProps) => {

  return (
    <NavLink to={link}>
      <AsideElement interactive={true}>
        <div style={{ paddingLeft: (innerPadding || 0) + 24 + 'px' }}>{title}</div>
      </AsideElement>
    </NavLink>
  );
}
