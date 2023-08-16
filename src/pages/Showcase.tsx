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

  const refAside = useRef<HTMLDivElement | null>(null);
  const refAsideToggler = useRef<HTMLDivElement | null>(null);

  const size = useWindowSize(400);

  useEffect(() => {
    if (size?.width >= showAsideBreakpoint) {
      setShowAsideMemo(showAside);
    }
  }, [showAside, size.width]);

  useOnClickOutside([refAside, refAsideToggler], () => {
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

  const getContentOffset = () => {
    if (showAside && (size.width >= showAsideBreakpoint)) {
      return {}
    } else {
      return {
        marginLeft: '.5rem'
      }
    }
  }

  return (
    <div style={{ position: 'relative' }}>

      <div
        className={s.AsideSwitcher}
        style={{ transform: `translateX(${showAside ? '1rem' : '.5rem'})`}}
      >
        <Button onClick={toggleAside} theme={'base'} variant={'text'} size={'md'} prefix={<RiMenuFill/>} iconButton />
      </div>

      <Aside isShowing={showAside} ref={refAside} hide={hideAsideIfMobile} />

      <div className={s.ShowcaseContent} style={getContentOffset()}>
        Base content
      </div>


    </div>
  );
}
