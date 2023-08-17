import { AsideElement } from '~/pages/components/Aside/AsideElement';
import {RiArrowDownSLine, RiArrowRightSLine} from 'react-icons/ri';

import colors from '~/styles/colors-semantic.module.scss';

import classNames from 'classnames/bind';
import s from './AsideNavGroupHead.module.scss';
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

        <span className={'pr-1'} style={{ fontSize: '20px', lineHeight: '0', color: 'red' }}>
          {groupState && <RiArrowDownSLine color={colors.colorTextBase} /> }
          {!groupState && <RiArrowRightSLine color={colors.colorTextBaseMuted} /> }
        </span>
        {title}

      </div>
    </AsideElement>
  );
}
