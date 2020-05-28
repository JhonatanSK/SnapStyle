import React from 'react';
import './Topbar.css';
import { ReactComponent as Search } from '../../assets/search-white-24dp.svg';
import { ReactComponent as Bag } from '../../assets/bag.svg';

function Topbar() {
  return (
    <header className="topbar">
        <nav className="topbar__menu">
            <p>SNAPSTYLE</p>
            <div className="topbar__icons">
                <Search alt="search" />
                <Bag alt="bag" />
            </div>
        </nav>
    </header>
  );
}

export default Topbar;