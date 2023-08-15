import { useRef, useState, useEffect } from 'react';
import { Aside } from '~/pages/components';
import { Button } from '~/uikit';
import { useWindowSize, useOnClickOutside } from "~/utils";
import s from './Showcase.module.scss';

import { RiMenuFill } from 'react-icons/ri';

const showAsideBreakpoint = 768;

export default function Showcase() {

  const [showAside, setShowAside] = useState(true);
  const [showAsideMemo, setShowAsideMemo] = useState(true);

  const refAside = useRef<HTMLDivElement>(null);
  const refAsideToggler = useRef<HTMLDivElement>(null);

  const size = useWindowSize(400);

  useEffect(() => {
    if (size?.width >= showAsideBreakpoint) {
      setShowAsideMemo(showAside);
    }
  }, [showAside, size.width]);

  useOnClickOutside([refAside, refAsideToggler], () => {
    console.log('hide aside on mobile device');
    setShowAside(false);
  }, (showAside && size.width < showAsideBreakpoint));

  useEffect(() => {
    if (size.width && size.width < showAsideBreakpoint) {
      setShowAside(false);
    } else {
      setShowAside(showAsideMemo);
    }
    // eslint-disable-next-line
  }, [size.width, setShowAside]);

  const toggleAside = () => {
    setShowAside(!showAside);
  }

  const hideAsideIfMobile = () => {
    if (size.width < showAsideBreakpoint) {
      setShowAside(false);
    }
  }

  return (
    <div style={{ position: 'relative' }}>

      <div style={{
        position: 'absolute',
        zIndex: 999,
        top: '.5rem',
        left: '.5rem',
        transform: `translateX(${showAside ? '1rem' : '0'})`,
        transition: 'all .3s ease-in-out',
      }}>
        <Button onClick={toggleAside} theme={'base'} variant={'text'} size={'md'} prefix={<RiMenuFill/>} iconButton />
      </div>

      <Aside isShowing={showAside} ref={refAside} hide={hideAsideIfMobile} />

      <div className={s.ShowcaseContent}>
        Base content
      </div>


    </div>
  );
}