import React, { ReactNode } from 'react';
import s from './h2.module.scss';

interface IH2Props {
  children: ReactNode;
}

export const H2: React.FC<IH2Props> = ({ children }) => (
  <h2 className={s.H2}>
    {children}
  </h2>
)
