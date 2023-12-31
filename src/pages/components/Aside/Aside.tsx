// Sidebar component

import { useState, useEffect, ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames/bind';
import s from './Aside.module.scss';
// import { UserBlock } from 'shared/UserBlock/UserBlock';
import { AsideNav } from '~/pages/components/Aside/AsideNav';

const sx = classNames.bind(s);

export interface IAsideProps {
  isShowing: boolean;
  isMobile?: boolean;
  hide?: () => void;
}

export const Aside = forwardRef(({ isShowing, isMobile }: IAsideProps, ref: ForwardedRef<HTMLDivElement>) => {

  const [ isDisplaying, setIsDisplaying ] = useState(true);

  const asideClassNames = sx({
    Aside: true,
    AnimateHiding: !isShowing,
    AsideHidden: !isDisplaying,
    AnimateShowing: isShowing,
    AsidePopup: isMobile,
  });

  useEffect(() => {
    if (isShowing) {
      setIsDisplaying(isShowing);
    }
  }, [ isShowing ]);

  const handleAnimationEnd = () => {
    if (!isShowing) {
      setIsDisplaying(isShowing);
    }
  }

  return (
    <aside ref={ref} className={asideClassNames} onAnimationEnd={ handleAnimationEnd }>

      {/*<UserBlock username="Dennis" companyName="Muzq" />*/}

      <div className={s.AsideNavWrapper}>
        <AsideNav />
      </div>

    </aside>
  );
});
