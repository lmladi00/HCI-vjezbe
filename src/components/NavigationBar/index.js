import React from 'react'

import * as styles from './style.module.css'
//sadržava tabove
//styles.active - na njemu smo trenutno i oznacen je po defaultu i nikoji drugi ne moze biti aktivan, to cemo posli rijesiti
const NavigationBar = () => (
    <nav className={styles.navigationBar}>
        <li className={styles.active}>Home</li>
        <li>Accommodation</li>
        <li>Photo gallery</li>
        <li>Contact</li>
    </nav>
  )  

export default NavigationBar