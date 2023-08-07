import React, { ReactNode } from 'react'
import s from './box.module.scss'

export const Box: React.FunctionComponent<{ children: ReactNode }> = function box({ children }) {
  return (
    <div className={s.Box}>
      {children}
    </div>
  )
}