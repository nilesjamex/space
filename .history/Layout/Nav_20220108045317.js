import React, {useState} from 'react';
import styles from './nav.module.css';
import Link from 'next/link'

const Nav = ({children}) => {
  const [active, setActive] = useState(false);
  const body = document.querySelector("body");

  const onClick = (e) => {
    setActive(!active);
  };

  if (active) {
    body.style.cssText = "overflow-y:hidden;";
  } else {
    body.style.cssText = "overflow:none;";
  }
    return (
       <div className={styles.navBody}>
        <nav className={styles.nav}>
         <div>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z" fill="#0B0D17" />
</svg>
  </div>

<ul className={styles.ul}>
<li><Link href="/"> HOME </Link></li>
<li><Link href="/Destinations">DESTINATION </Link></li>
<li><Link href="/Crew">CREW</Link></li>
<li><Link href="/Technology">TECHNOLOGY</Link></li>
</ul>
<div
          className={`toggle ${active ? `toggleanime` : ""}`}
          onClick={onClick}
        >
          <div className="toggle-line line1"></div>
          <div className="toggle-line line2"></div>
          <div className="toggle-line line3"></div>
        </div>
        </nav>
      <div className={styles.mainBody}> {children} </div>
</div>
    )
}

export default Nav
