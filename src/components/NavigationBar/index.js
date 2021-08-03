import React from 'react'

import * as styles from './style.module.css'
//sadržava tabove
//styles.active - na njemu smo trenutno i oznacen je po defaultu i nikoji drugi ne moze biti aktivan, to cemo
/*const NavigationBar = () => (
    <nav className={styles.navigationBar}>
        <li className={styles.active}>Home</li>
        <li>Accommodation</li>
        <li>Photo gallery</li>
        <li>Contact</li>
    </nav>
  )  

export default NavigationBar
*/
//2. NACIN
//RAZLIKA JE STO NEMAMO VISE HOME KAO ACTIVE!!!
const navTabs = ['Home', 'Accommodation', 'Photo Gallery', 'Contact']
 //ako je home stavi aktiv ako nije onda bez!
 //bolje if else bolje se vidi, umjesto ternarnog operatora!
/*
const NavigationBar = () => (
  <nav className={styles.navigationBar}>
    {navTabs.map(tab => {
      if (tab === 'Home')
      return (
        <li className={styles.active}>
          {tab}
        </li>)
      else
        return <li>{tab}</li>
      }
    )}
  </nav>
)
*/
const NavigationBar = props => (
  <nav className={styles.navigationBar}>
    {navTabs.map(tab => <li className={tab===props.activeTab ? styles.active : ''}>
      {tab}</li>
    )}
  </nav>
)
export default NavigationBar