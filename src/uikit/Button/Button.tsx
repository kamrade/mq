/*
// ButtonComponent
 */
import React, { memo, forwardRef, ForwardRefRenderFunction } from 'react';
import s from './Button.module.scss';
import classNames from 'classnames/bind';
import { RiLoaderLine } from "react-icons/ri";

import { ButtonProps } from './Button.types.ts';

const sx = classNames.bind(s);

const InternalButton: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (props, ref ) => {

  const {
    theme = 'base',
    variant = 'text',
    shape,
    children,
    size,
    bold,
    disabled,
    type,
    prefix,
    suffix,
    className,
    block,
    wide,
    loading,
    iconButton,
    ...other
  } = props;

  let buttonClassNames = sx({
    ButtonBase: true,

    Base: theme === 'base',
    Primary: theme === 'primary',
    Success: theme === 'success',
    Danger: theme === 'danger',
    Warning: theme === 'warning',

    Text: variant === 'text',
    Contained: variant === 'contained',
    Light: variant === 'light',
    Outlined: variant === 'outlined',

    XS: size === 'xs',
    SM: size === 'sm',
    MD: size === 'md',
    LG: size === 'lg',

    Circle: shape === 'circle',
    Square: shape === 'square',
    Rounded: shape === 'rounded',

    IconButton: iconButton,

    Bold: bold,
    Loading: loading,
    Wide: wide,
    Block: block,
  });

  buttonClassNames += className ? ' ' + className : '';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onClick } = props;

    if ( onClick ) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  }

  return (
    <button { ...other } disabled={disabled || loading} ref={ref} onClick={handleClick} type={type || 'button'} className={buttonClassNames}>

      {prefix && <span className={s.buttonPrefix}>{prefix}</span>}
      {!iconButton && children}
      {!iconButton && suffix && <span className={s.buttonSuffix}>{suffix}</span>}

      {loading && <span className={s.preLoader}>
        <span className={s.preloaderAnimator}>
          <RiLoaderLine fontSize={'1em'}/>
        </span>
      </span>}
    </button>
  );
};

const Button = memo(forwardRef<HTMLButtonElement, ButtonProps>( InternalButton ));
Button.displayName = 'Button';
export {Button};
