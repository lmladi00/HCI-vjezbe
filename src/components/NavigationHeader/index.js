import React from 'react'
//dodali smo Logo u NavigationHeader da se prikaze na stranici
import Logo from '../Logo'
import Navigation from '../Navigation'

import * as styles from './style.module.css'

const NavigationHeader = () => (
  <section className={styles.navigationHeader}>
    <Logo />
    <Navigation />
  </section>
)
export default NavigationHeader