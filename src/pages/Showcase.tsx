import { useRef } from 'react';
import { Aside } from '~/pages/components';

export default function Showcase() {

  const refAside = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Aside isShowing={true} ref={refAside} hide={() => console.log('hide aside')} />
    </div>
  );
}