import React, {useState} from 'react';
import styles from './nav.module.css';
import Link from 'next/link';

const Nav = ({children}) => {
  const [active, setActive] = useState(false);

  const onClick = (e) => {
    setActive(!active);
  };
    return (
       <div className={styles.navBody}>
        <nav className={styles.nav}>
         <div>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z" fill="#0B0D17" />
</svg>
  </div>
  <div className={styles.linediv}> 
  <hr className={styles.line}/>
  </div>
<ul className={`${styles.ul} ${active ? styles.activenav : ""}` } >
<li className={styles.li}><Link href="/"> HOME </Link></li>
<li className={styles.li}><Link href="/Destinations">DESTINATION </Link></li>
<li className={styles.li}><Link href="/Crew">CREW</Link></li>
<li className={styles.li}><Link href="/Technology">TECHNOLOGY</Link></li>
</ul>
<div className={`${styles.toggle} ${active ? styles.toggleanime : ""}`}
          onClick={onClick}
        >
          <div className={`${styles.toggleline} ${styles.line1}`}></div>
          <div className={`${styles.toggleline} ${styles.line2}`}></div>
          <div className={`${styles.toggleline} ${styles.line3}`}></div>
        </div>
        </nav>
      <div className={styles.mainBody}> {children} </div>
</div>
    )
}

export default Nav
