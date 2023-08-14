import { AsideElement } from '~/pages/components/aside/aside-element';
import {RiArrowDownSLine, RiArrowRightSLine} from 'react-icons/ri';

import colors from '~/styles/colors-semantic.module.scss';

import classNames from 'classnames/bind';
import s from './aside-nav-group-head.module.scss';
const sx = classNames.bind(s);

export interface IAsideNavGroupHeadProps {
  groupState: boolean;
  title: string;
  innerPadding?: number;
  active? : boolean;
}

export const AsideNavGroupHead = ({ groupState, title, innerPadding, active }: IAsideNavGroupHeadProps) => {

  const asideNavItemClassNames = sx({
    AsideNavGroupHead: true,
    Active: active && !groupState
  });

  return (
    <AsideElement interactive={true}>
      <div className={asideNavItemClassNames} style={{ paddingLeft: (innerPadding || 0) + 'px' }}>

        <span className={'pr-1'}>
          {groupState && <RiArrowDownSLine color={colors.colorTextBaseMuted} /> }
          {!groupState && <RiArrowRightSLine color={colors.colorTextBaseDisabled} /> }
        </span>
        {title}

      </div>
    </AsideElement>
  );
}
