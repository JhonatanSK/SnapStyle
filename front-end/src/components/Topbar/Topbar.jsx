import React from 'react';
import './Topbar.scss';
import { ReactComponent as Search } from '../../assets/search-white-24dp.svg';
import { ReactComponent as Bag } from '../../assets/bag.svg';
import { ReactComponent as LogoDark } from '../../assets/logo-dark.svg';

function Topbar() {
  return (
    <header className="topbar">
        <nav className="topbar__menu">
          <a><LogoDark alt="Logo" /></a>
            <div className="topbar__icons">
                <Search alt="search" />
                <Bag alt="bag" />
            </div>
        </nav>
    </header>
  );
}

export default Topbar;