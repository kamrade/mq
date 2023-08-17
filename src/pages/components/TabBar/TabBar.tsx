import ReactDOM from 'react-dom';
import s from './TabBar.module.scss';

export const TabBar = () => {
  return ReactDOM.createPortal((
    <div className={s.TabBar}>
      <div className={s.TabBarSwitcher}>

      </div>
    </div>
  ), document.getElementById('tab-bar-root') as HTMLDivElement);
}