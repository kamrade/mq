// Element wrapper inside Aside component which determine spacing

import React, { ForwardedRef, ReactNode } from 'react';
import s from './AsideElement.module.scss';
import classNames from 'classnames/bind';

const sx = classNames.bind(s);

interface IAsideElementProps {
  interactive?: boolean;
  children: ReactNode | ReactNode[];
}

export const AsideElement = React.forwardRef((props: IAsideElementProps, ref: ForwardedRef<HTMLDivElement>) => {

  const asideElementClassName = sx({
    AsideElement: true,
    AsideElementInteractive: props.interactive
  });

  return (
    <div ref={ref} className={asideElementClassName}>
      { props.children }
    </div>
  );
});
